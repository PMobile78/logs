const {AbstractDB, Helpers: {floorTime}} = require('genesis-libs')
const AffiliateHistory = require('../orm/models/AffiliateHistory')
const AffiliateEmailHistory = require('../orm/models/AffiliateEmailHistory')
const AffiliatePaymentMethodHistory = require('../orm/models/AffiliatePaymentMethodHistory')
const AffiliateStatusHistory = require('../orm/models/AffiliateStatusHistory')
const AffiliateManagerHistory = require('../orm/models/AffiliateManagerHistory')
const ManagerHistory = require('../orm/models/ManagerHistory')
const InitiatorHistory = require('../orm/models/InitiatorHistory')
const typeorm = require('typeorm')
const {LessThan, In} = require('typeorm')

class GenesisDB extends AbstractDB {

    get typeorm () {
        return typeorm
    }

    async createAffiliateLog ({field, affiliateId, createdDate, newValue, oldValue, fingerprint, sourceIp}) {
        let connection = await this.connection()
        const log = new AffiliateHistory(
            null,
            field,
            affiliateId,
            createdDate || floorTime(new Date),
            newValue,
            oldValue,
            fingerprint,
            sourceIp
        )
        return connection.getRepository(AffiliateHistory).save(log)
    }

    async createAffiliateEmailLog ({field, emailId, affiliateId, createdDate, newValue, oldValue, fingerprint, sourceIp}) {
        let connection = await this.connection()
        const log = new AffiliateEmailHistory(
            null,
            field,
            emailId,
            affiliateId,
            createdDate || floorTime(new Date),
            newValue,
            oldValue,
            fingerprint,
            sourceIp
        )
        return connection.getRepository(AffiliateEmailHistory).save(log)
    }

    async createAffiliatePaymentMethodLog ({tableName, entityId, field, oldValue, newValue, createdDate, token}, initiatorId, initiator) {
        let connection = await this.connection()
        let initiatorHistory = await this.createInitiatorLog(initiatorId, initiator, connection)
        const log = new AffiliatePaymentMethodHistory(
            null,
            tableName,
            entityId,
            field,
            oldValue,
            newValue,
            token,
            createdDate || floorTime(new Date),
            initiatorHistory.id
        )
        return await connection.getRepository(AffiliatePaymentMethodHistory).save(log)
    }

    async getLogs (Repository, field, value) {
        let connection = await this.connection()
        let getLogsRepository = connection.getRepository(Repository)
        return getLogsRepository.find({
            where: {
                [field]: value
            }
        })
    }

    async createAffiliateStatusLog ({affiliateId, createdDate, newValue, oldValue}) {
        let connection = await this.connection()
        const log = new AffiliateStatusHistory(
            null,
            affiliateId,
            createdDate || floorTime(new Date),
            newValue,
            oldValue
        )
        return connection.getRepository(AffiliateStatusHistory).save(log)
    }

    async createAffiliateManagerLog ({affiliateId, field, entityId, createdDate, newValue, oldValue}) {
        let connection = await this.connection()
        const log = new AffiliateManagerHistory(
            null,
            affiliateId,
            field,
            entityId,
            createdDate || floorTime(new Date),
            newValue,
            oldValue
        )
        return connection.getRepository(AffiliateManagerHistory).save(log)
    }

    async createManagerLog ({field, managerId, createdDate, newValue, oldValue}) {
        let connection = await this.connection()
        const log = new ManagerHistory(
            null,
            field,
            managerId,
            createdDate || floorTime(new Date),
            newValue,
            oldValue
        )
        return connection.getRepository(ManagerHistory).save(log)
    }

    async getNameUpdatedDate (affilaiteId) {
        let connection = await this.connection()
        let result = await connection.getRepository(AffiliateHistory).findOne({
            where: {
                affiliate_id: +affilaiteId,
                field: typeorm.In(['first_name', 'last_name']),
                old_value: typeorm.Not('')
            },
            order: {
                created_date: 'DESC'
            }
        })
        if(result && result.created_date) {
            return result.created_date
        }
        return null
    }

    async getEmailUpdatedDate (affilaiteId) {
        let connection = await this.connection()
        let result = await connection.getRepository(AffiliateEmailHistory).find({
            where: {
                affiliate_id: +affilaiteId,
                field: 'is_active',
                new_value: 'true'
            },
            order: {
                created_date: 'DESC'
            }
        })
        if (result.length > 1) {
            return result['0'].created_date
        }
        return null
    }

    async createInitiatorLog (initiatorId, initiator, connection) {
        const initiatorLog = new InitiatorHistory(null, initiatorId, initiator, floorTime(new Date))
        return await connection.getRepository(InitiatorHistory).save(initiatorLog)
    }

    async getPaymentMethodComplexHistoryByDate (paymentMethodActive, beneficiaryBankInformation, intermediaryBankInformation) {
        let connection = await this.connection()
        let query = {
            where: [
                {table_name: 'beneficiary_information', entity_id: In(paymentMethodActive.beneficiaryInformationId)},
                {table_name: 'bank_information', entity_id: beneficiaryBankInformation.new_value}
            ],
            order: {
                created_date: 'DESC'
            }
        }
        if (intermediaryBankInformation && intermediaryBankInformation.new_value.length) {
            query.where.push({table_name: 'bank_information', entity_id: intermediaryBankInformation.new_value})
        }
        return connection.getRepository(AffiliatePaymentMethodHistory).find(query)
    }

    async getPaymentMethodSimpleHistoryByDate (date, paymentMethodActive) {
        let connection = await this.connection()
        return connection.getRepository(AffiliatePaymentMethodHistory).find({
            where: {
                table_name: 'affiliate_payment_method_' + paymentMethodActive.name,
                entity_id: paymentMethodActive.paymentMethodId,
                created_date: LessThan(date)
            },
            order: {
                created_date: 'DESC'
            }
        })
    }
}

module.exports = GenesisDB