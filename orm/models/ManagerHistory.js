class ManagerHistory {
    constructor (id, field, manager_id, created_date, new_value, old_value) {
        this.id = id
        this.field = field
        this.manager_id = manager_id
        this.created_date = created_date
        this.new_value = String(new_value)
        this.old_value = String(old_value)
    }
}

module.exports = ManagerHistory


