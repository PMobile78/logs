const {logger} = require('genesis-libs')
const logService = require('../services/History')

module.exports = async (event, context) => {
    return await Promise.all(event.Records.map(async record => {
        let body = JSON.parse(record.body)
        if (!logService.hasOwnProperty(body.entityType)) {
            logger.error('wrong entityType', body.entityType)
            return JSON.stringify({
                status: 'error'
            })
        }
        return logService[body.entityType](body.payload)
    }))
}