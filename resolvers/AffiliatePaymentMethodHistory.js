const {Config, Metrics} = require('genesis-libs')
const GenesisDB = require('../datasources/GenesisDB')
const AffiliatePaymentMethodHistoryService = require('../services/AffiliatePaymentMethodHistory')
const pino = require('pino')(Config.getSync('log'))

class AffiliatePaymentMethodHistory {
    async createAffiliatePaymentMethodLog(entity) {
        Metrics.setStartMetric({ fieldName: entity.field })
        let objLogs = new AffiliatePaymentMethodHistoryService(new GenesisDB)
        try {
            let result = await objLogs.createAffiliatePaymentMethodLog(entity)
            Metrics.influxdb(200)
            return result
        } catch (error) {
            pino.error(error)
            Metrics.influxdb(500)
            throw new Error('Something wrong while creating an Affiliate Payment Method history')
        }
    }
}

module.exports = AffiliatePaymentMethodHistory