const camelcaseKeys = require('camelcase-keys')

class AffiliateManagerHistory {
    constructor (database) {
        this.database = database
    }

    async createAffiliateManagerLog (params) {
        return camelcaseKeys(await this.database.createAffiliateManagerLog(params))
    }
}

module.exports = AffiliateManagerHistory