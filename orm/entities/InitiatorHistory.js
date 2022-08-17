const EntitySchema = require('typeorm').EntitySchema
const InitiatorHistory = require('../models/InitiatorHistory')

module.exports = new EntitySchema({
    name: 'InitiatorHistory',
    target: InitiatorHistory,
    tableName: 'initiator_history',
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true,
            unsigned: true
        },
        initiator_id: {
            type: 'int',
            unsigned: true
        },
        initiator: {
            type: 'varchar',
            length: 45
        },
        created_date: {
            type: 'int',
            unsigned: true
        }
    }
})