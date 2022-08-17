class AffiliateEmailHistory {
    constructor (id, field, email_id, affiliate_id, created_date, new_value, old_value, fingerprint, source_ip, initiator_history_id) {
        this.id = id
        this.field = field
        this.email_id = email_id
        this.affiliate_id = affiliate_id
        this.created_date = created_date
        this.new_value = String(new_value)
        this.old_value = String(old_value)
        this.fingerprint = fingerprint
        this.source_ip = source_ip
        this.initiator_history_id = initiator_history_id
    }
}

module.exports = AffiliateEmailHistory


