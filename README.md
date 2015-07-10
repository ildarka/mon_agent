# mon_agent
Hardware Monitoring Agent

Агент мониторинга — HTTP сервер на NodeJS для выдачи статистики о состоянии железа.
Агент принимает комманды от коллектора по HTTP в формате JSON RPC 2.

# Транспорт
npm jsonrpc2, уточнить про батчи

# Источники статистики
+ Температура или lm-sensors или попробовать из proc sys что лучше
+ Память, CPU, uptime, сетевые интерфейсы есть здесь же только подумать как прокинуть туда dpdk — моудль os
+ HDD — npm diskusage

# API
## getDeviceInfo

## getSensors

getCPU
getMEM
getHDD(params)
getNetworks(params)

Решить: бить на части или нет.


