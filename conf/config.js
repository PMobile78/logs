module.exports = (config) => {

    config.customEvent.fields = {
        Records: 'complex'
    }

    config.acl['affiliate/active'] = ['nameUpdatedDate', 'emailUpdatedDate', 'paymentMethodByDate']

    config.api.paymentMethod = {
        url: '/api/paymentMethod/url',
        secret: '/api/paymentMethod/secret',
    }

    return config
}