class AffiliatePaymentMethodHistory {
    constructor (id, table_name, entity_id, field, old_value, new_value, token, created_date, initiator_history_id) {
        this.id = id
        this.table_name = table_name
        this.entity_id = entity_id
        this.field = field
        this.new_value = String(new_value)
        this.old_value = String(old_value)
        this.created_date = created_date
        this.token = token || ''
        this.initiator_history_id = initiator_history_id
    }
}

module.exports = AffiliatePaymentMethodHistory


