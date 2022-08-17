const {Config, Metrics} = require('genesis-libs')
const GenesisDB = require('../datasources/GenesisDB')
const AffiliateStatusHistoryService = require('../services/AffiliateStatusHistory')
const pino = require('pino')(Config.getSync('log'))

class AffiliateStatusHistory {
    async createAffiliateStatusLog (entity) {
        Metrics.setStartMetric({ fieldName: entity.field })
        let objLogs = new AffiliateStatusHistoryService(new GenesisDB)
        try {
            let result = await objLogs.createAffiliateStatusLog(entity)
            Metrics.influxdb(200)
            return result
        } catch (error) {
            pino.error(error)
            Metrics.influxdb(500)
            throw new Error('Something wrong while creating an Affiliate Status history')
        }
    }
}

module.exports = AffiliateStatusHistory