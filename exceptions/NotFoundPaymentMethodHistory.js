const {Exceptions: {Abstract}} = require('genesis-libs')

class NotFoundPaymentMethodHistory extends Abstract {
    constructor (id) {
        super()
        this.message = `paymentMethod with ID ${id} not found`
    }
}

module.exports = NotFoundPaymentMethodHistory