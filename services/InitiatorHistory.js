class InitiatorHistory {

    getInitiator (params) {
        let initiatorId = params.affiliateId
        let initiatorName = 'affiliate'
        if (params.affiliateId && params.agentId) {
            initiatorId = params.agentId
            initiatorName = 'agent'
        }
        return {
            id: initiatorId,
            name: initiatorName
        }
    }

}

module.exports = InitiatorHistory