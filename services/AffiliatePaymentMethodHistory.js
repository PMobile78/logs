const camelcaseKeys = require('camelcase-keys')
const InitiatorHistory = require('./InitiatorHistory')
const {ApolloClient, gql, Exceptions: {BadInput, NotFound}} = require('genesis-libs')
const NotFoundPaymentMethodHistory = require('../exceptions/NotFoundPaymentMethodHistory')

class AffiliatePaymentMethodHistory {
    constructor (database) {
        this.database = database
    }

    async createAffiliatePaymentMethodLog (params) {
        let initiatorHistory = new InitiatorHistory()
        let initiator = initiatorHistory.getInitiator(params)
        return camelcaseKeys(await this.database.createAffiliatePaymentMethodLog(params, initiator.id, initiator.name))
    }

    async paymentMethodByDate (affiliateId, token, date) {
        const client = await ApolloClient.get('paymentMethod')
        let query = gql`
            query paymentMethodByDate($date: Int!) {
                paymentMethodByDate(date: $date) {
                    paymentMethod
                    accountId
                    bankInformation{
                    name
                      addressLine1
                      addressLine2
                      city
                      countryCode
                      zipCode
                      state
                      swiftCode
                      abaRoutingNumber
                      accountNumberOrIban
                    }
                    beneficiaryInformation{
                      name
                      addressLine1
                      addressLine2
                      city
                      countryCode
                      zipCode
                      state
                    }
                    intermediaryBankInformation{
                      name
                      addressLine1
                      addressLine2
                      city
                      countryCode
                      zipCode
                      state
                      swiftCode
                      abaRoutingNumber
                      accountNumberOrIban
                    }
                    bankDetails
                }
            }
        `
        const result = await client.query({
            query,
            variables: {
                date
            },
            context: {
                headers: {
                    authorization:token
                }
            },
            fetchPolicy: 'no-cache'
        })
        let queryName = query.definitions[0].name.value
        if (!result.data[queryName]) {
            throw new BadInput('date', date)
        }
        return result.data[queryName]
    }
}

module.exports = AffiliatePaymentMethodHistory