const EntitySchema = require('typeorm').EntitySchema
const AffiliatePaymentMethodHistory = require('../models/AffiliatePaymentMethodHistory')

module.exports = new EntitySchema({
    name: 'AffiliatePaymentMethodHistory',
    target: AffiliatePaymentMethodHistory,
    tableName: 'affiliate_payment_method_history',
    columns: {
        id: {
            primary: true,
            type: 'bigint',
            generated: true,
            unsigned: true
        },
        table_name: {
            type: 'varchar',
            length: 255
        },
        entity_id: {
            type: 'int',
            unsigned: true
        },
        field: {
            type: 'varchar',
            length: 255
        },
        old_value: {
            type: 'text'
        },
        new_value: {
            type: 'text'
        },
        created_date: {
            type: 'int',
            unsigned: true
        },
        token: {
            type: 'text'
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