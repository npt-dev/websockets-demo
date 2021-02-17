const Responses = require('../../utils/responses')
const WebSocket = require('../../utils/webSocketMessage')

module.exports = async req => {
    const { connectionId: connectionID, domainName, stage } = req

    try {
        await WebSocket.send({
            domainName, stage, connectionID, message: 'This is a reply to your message'
        })
    } catch (error) {
        console.error(error)
        return Responses._400({ message: 'message could not be received'})
    }
}