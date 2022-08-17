const camelcaseKeys = require('camelcase-keys')

class AffiliateHistory {
    constructor (database) {
        this.database = database
    }

    async createAffiliateLog (params) {
        return camelcaseKeys(await this.database.createAffiliateLog(params))
    }

    async getNameUpdatedDate (affiliateId) {
        return this.database.getNameUpdatedDate(affiliateId)
    }
}

module.exports = AffiliateHistory