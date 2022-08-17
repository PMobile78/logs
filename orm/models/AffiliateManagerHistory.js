class AffiliateManagerHistory {
    constructor (id, affiliate_id, field, entity_id, created_date, new_value, old_value) {
        this.id = id
        this.affiliate_id = affiliate_id
        this.field = field
        this.entity_id = entity_id
        this.created_date = created_date
        this.new_value = String(new_value)
        this.old_value = String(old_value)
    }
}

module.exports = AffiliateManagerHistory


