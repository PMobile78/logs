const camelcaseKeys = require('camelcase-keys')

class AffiliateHistory {
    constructor (database) {
        this.database = database
    }

    async createAffiliateStatusLog (params) {
        return camelcaseKeys(await this.database.createAffiliateStatusLog(params))
    }
}

module.exports = AffiliateHistory