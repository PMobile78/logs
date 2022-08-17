const EntitySchema = require('typeorm').EntitySchema
const AffiliateManagerHistory = require('../models/AffiliateManagerHistory')

module.exports = new EntitySchema({
    name: 'AffiliateManagerHistory',
    target: AffiliateManagerHistory,
    tableName: 'affiliate_manager_history',
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true,
            unsigned: true
        },
        affiliate_id: {
            type: 'bigint',
            unsigned: true
        },
        field: {
            type: 'varchar',
            length: 45
        },
        entity_id: {
            type: 'bigint',
            unsigned: true
        },
        created_date: {
            type: 'int',
            unsigned: true
        },
        new_value: {
            type: 'text'
        },
        old_value: {
            type: 'text'
        }
    }
})