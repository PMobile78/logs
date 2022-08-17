const {Config, Metrics} = require('genesis-libs')
const GenesisDB = require('../datasources/GenesisDB')
const AffiliateHistoryService = require('../services/AffiliateHistory')
const pino = require('pino')(Config.getSync('log'))

class AffiliateHistory {
    async createAffiliateLog (entity) {
        Metrics.setStartMetric({ fieldName: entity.field })
        let objLogs = new AffiliateHistoryService(new GenesisDB)
        try {
            let result = await objLogs.createAffiliateLog(entity)
            Metrics.influxdb(200)
            return result
        } catch (error) {
            pino.error(error)
            Metrics.influxdb(500)
            throw new Error('Something wrong while creating an Affiliate history')
        }
    }
}

module.exports = AffiliateHistory