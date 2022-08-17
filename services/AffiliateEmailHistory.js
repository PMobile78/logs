const camelcaseKeys = require('camelcase-keys')

class AffiliateEmailHistory {
    constructor (database) {
        this.database = database
    }

    async createAffiliateEmailLog (params) {
        return camelcaseKeys(await this.database.createAffiliateEmailLog(params))
    }

    async getEmailUpdatedDate (affiliateId) {
        return this.database.getEmailUpdatedDate(affiliateId)
    }
}

module.exports = AffiliateEmailHistory