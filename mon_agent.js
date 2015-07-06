/*
  Агент мониторинга — сервер отвечающий на JSON-RPC2 запросы
  Метод getInfo — возвращает информацию об устройстве
  Метод getSensors — возвращает информацию с датчиков 
  CPU, Memory, Disks, Network
*/

var fs = require('fs');
var path = require('path');

var os = require('os');
var disk = require('diskusage');
var rpc = require('json-rpc2');

var log4js = require('log4js');
var log = log4js.getLogger();

var config = require('./config.json');

var server = rpc.Server.$create({
    'websocket': true,
    'headers': {
        'Access-Control-Allow-Origin': '*'
    }
});

var info = {};
if (config.guiPath) {
  info = require(config.guiPath);
}

info.network = config.network || [];
info.disks = config.disks || [];

server.expose('getDeviceInfo', function(args, opts, callback) {
  log.info("getDeviceInfo", info);
  callback(null, info);
});

server.expose('getSensors', function(args, opts, callback) { 
  var sensors = {};
  callback(null, sensors);
});

server.listen(config.server.port, 'localhost');
log.info('Monitoring Agent listening on port ' + config.server.port);
