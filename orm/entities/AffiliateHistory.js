const EntitySchema = require('typeorm').EntitySchema
const AffiliateHistory = require('../models/AffiliateHistory')

module.exports = new EntitySchema({
    name: 'AffiliateHistory',
    target: AffiliateHistory,
    tableName: 'affiliate_history',
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true,
            unsigned: true
        },
        field: {
            type: 'varchar',
            length: 45
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
            type: 'text'
        },
        old_value: {
            type: 'text'
        },
        fingerprint: {
            type: 'varchar',
            length: 255
        },
        source_ip: {
            type: 'varchar',
            length: 40
        }

    }
})