const GenesisDB = require('../datasources/GenesisDB')
const AffiliateEmailHistoryService = require('../services/AffiliateEmailHistory')
const AffiliateHistoryService = require('../services/AffiliateHistory')
const AffiliatePaymentMethodHistory = require('../services/AffiliatePaymentMethodHistory')

module.exports = {
    Query: {
        nameUpdatedDate: async (parent, params, ctx) => {
            let service = new AffiliateHistoryService(new GenesisDB)
            return service.getNameUpdatedDate(ctx.affiliateId)
        },
        emailUpdatedDate: async (parent, params, ctx) => {
            let service = new AffiliateEmailHistoryService(new GenesisDB)
            return service.getEmailUpdatedDate(ctx.affiliateId)
        },
        paymentMethodByDate: async (parent, params, ctx) => {
            let service = new AffiliatePaymentMethodHistory(new GenesisDB)
            return await service.paymentMethodByDate(ctx.affiliateId, ctx.token, params.date)
        },
    },
}
