const {Config, Metrics} = require('genesis-libs')
const GenesisDB = require('../datasources/GenesisDB')
const AffiliateManagerHistoryService = require('../services/AffiliateManagerHistory')
const pino = require('pino')(Config.getSync('log'))

class AffiliateManagerHistory {
    async createAffiliateManagerHistory (entity) {
        Metrics.setStartMetric({ fieldName: entity.field })
        let objLogs = new AffiliateManagerHistoryService(new GenesisDB)
        try {
            let result = await objLogs.createAffiliateManagerLog(entity)
            Metrics.influxdb(200)
            return result
        } catch (error) {
            pino.error(error)
            Metrics.influxdb(500)
            throw new Error('Something wrong while creating an Affiliate Manager history')
        }
    }
}

module.exports = AffiliateManagerHistory