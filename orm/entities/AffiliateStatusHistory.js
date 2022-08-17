const EntitySchema = require('typeorm').EntitySchema
const AffiliateStatusHistory = require('../models/AffiliateStatusHistory')

module.exports = new EntitySchema({
    name: 'AffiliateStatusHistory',
    target: AffiliateStatusHistory,
    tableName: 'affiliate_status_history',
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true,
            unsigned: true
        },
        affiliate_id: {
            type: 'int',
            unsigned: true
        },
        created_date: {
            type: 'int',
            unsigned: true
        },
        new_value: {
            type: 'varchar',
            length: 20
        },
        old_value: {
            type: 'varchar',
            length: 20
        }
    }
})