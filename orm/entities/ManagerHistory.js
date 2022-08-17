const EntitySchema = require('typeorm').EntitySchema
const ManagerHistory = require('../models/ManagerHistory')

module.exports = new EntitySchema({
    name: 'ManagerHistory',
    target: ManagerHistory,
    tableName: 'manager_history',
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
        manager_id: {
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