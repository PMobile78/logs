const EntitySchema = require('typeorm').EntitySchema
const AffiliateEmailHistory = require('../models/AffiliateEmailHistory')

module.exports = new EntitySchema({
    name: 'AffiliateEmailHistory',
    target: AffiliateEmailHistory,
    tableName: 'affiliate_email_history',
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
        field: {
            type: 'varchar',
            length: 45
        },
        email_id: {
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
        },
        initiator_history_id: {
            type: 'bigint',
            unsigned: true
        }
    },
    relations: {
        initiator_history: {
            target: 'InitiatorHistory',
            type: 'one-to-one',
            joinColumn: {name: 'initiator_history_id'},
        }
    },
})