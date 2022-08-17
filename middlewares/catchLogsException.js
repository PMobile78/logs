const NotFoundPaymentMethodHistory = require('../exceptions/NotFoundPaymentMethodHistory')
const {Modules: {'apollo-server-lambda': {UserInputError}}} = require('genesis-libs')

module.exports = async (resolve, root, args, context, info) => {
    try {
        return await resolve(root, args, context, info)
    } catch (error) {
        if (error instanceof NotFoundPaymentMethodHistory) {
            throw new UserInputError(error.message)
        }
        throw error
    }
}