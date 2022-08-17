const {Config, Metrics} = require('genesis-libs')
const GenesisDB = require('../datasources/GenesisDB')
const ManagerHistoryService = require('../services/ManagerHistory')
const pino = require('pino')(Config.getSync('log'))

class ManagerHistory {
    async createManagerHistory (entity) {
        Metrics.setStartMetric({ fieldName: entity.field })
        let objLogs = new ManagerHistoryService(new GenesisDB)
        try {
            let result = await objLogs.createManagerLog(entity)
            Metrics.influxdb(200)
            return result
        } catch (error) {
            pino.error(error)
            Metrics.influxdb(500)
            throw new Error('Something wrong while creating an Manager history')
        }
    }
}

module.exports = ManagerHistory