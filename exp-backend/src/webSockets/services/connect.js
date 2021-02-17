const Responses = require('../../utils/responses')

module.exports = async req => {
    const { connectionId, domainName, stage } = req
    console.log(`connectionId: ${connectionId}\n domainName: ${domainName}\n stage: ${stage}`)
    try {
        return Responses._200({ message: "connected" });
    } catch (error) {
        return Responses._400({ message: 'message could not be received'})
    }
}