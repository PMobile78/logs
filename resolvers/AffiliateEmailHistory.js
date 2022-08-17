const {Config, Metrics} = require('genesis-libs')
const GenesisDB = require('../datasources/GenesisDB')
const AffiliateEmailHistoryService = require('../services/AffiliateEmailHistory')
const pino = require('pino')(Config.getSync('log'))

class AffiliateEmailHistory {
    async createAffiliateEmailLog (entity) {
        Metrics.setStartMetric({ fieldName: entity.field })
        let objLogs = new AffiliateEmailHistoryService(new GenesisDB)
        try {
            let result = await objLogs.createAffiliateEmailLog(entity)
            Metrics.influxdb(200)
            return result
        } catch (error) {
            pino.error(error)
            Metrics.influxdb(500)
            throw new Error('Something wrong while creating an Affiliate Email history')
        }
    }
}

module.exports = AffiliateEmailHistory