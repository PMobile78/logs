const AffiliateEmailHistory = require('../resolvers/AffiliateEmailHistory')
const AffiliateHistory = require('../resolvers/AffiliateHistory')
const AffiliatePaymentMethodHistory = require('../resolvers/AffiliatePaymentMethodHistory')
const AffiliateStatusHistory = require('../resolvers/AffiliateStatusHistory')
const AffiliateManagerHistory = require('../resolvers/AffiliateManagerHistory')
const ManagerHistory = require('../resolvers/ManagerHistory')
const affiliateEmailHistory = new AffiliateEmailHistory()
const affiliateHistory = new AffiliateHistory()
const affiliatePaymentMethodHistory = new AffiliatePaymentMethodHistory()
const affiliateStatusHistory = new AffiliateStatusHistory()
const affiliateManagerHistory = new AffiliateManagerHistory()
const managerHistory = new ManagerHistory()

module.exports = {
    AffiliateEmailHistory: async (entity) => affiliateEmailHistory.createAffiliateEmailLog(entity),
    AffiliateHistory: async (entity) => affiliateHistory.createAffiliateLog(entity),
    AffiliatePaymentMethodHistory: async (entity) => affiliatePaymentMethodHistory.createAffiliatePaymentMethodLog(entity),
    AffiliateManagerHistory: async (entity) => affiliateManagerHistory.createAffiliateManagerHistory(entity),
    ManagerHistory: async (entity) => managerHistory.createManagerHistory(entity),
    AffiliateStatusHistory: async (entity) => affiliateStatusHistory.createAffiliateStatusLog(entity)
}
