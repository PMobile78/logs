const camelcaseKeys = require('camelcase-keys')

class ManagerHistory {
    constructor (database) {
        this.database = database
    }

    async createManagerLog (params) {
        return camelcaseKeys(await this.database.createManagerLog(params))
    }
}

module.exports = ManagerHistory