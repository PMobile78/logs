class AffiliateHistory {
    constructor (id, field, affiliate_id, created_date, new_value, old_value, fingerprint, source_ip) {
        this.id = id
        this.field = field
        this.affiliate_id = affiliate_id
        this.created_date = created_date
        this.new_value = String(new_value)
        this.old_value = String(old_value)
        this.fingerprint = fingerprint
        this.source_ip = source_ip
    }
}

module.exports = AffiliateHistory


