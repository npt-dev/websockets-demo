const AWS = require('aws-sdk')
AWS.config.update({
    region: "us-east-1",
});
const create = (domainName, stage) => {
    const endpoint = `${domainName}/${stage}`
    return new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint
    })
}

const send = async ({ domainName, stage, connectionID, message }) => {
    const ws = create(domainName, stage)
    const postParams = {
        Data: message,
        ConnectionId: connectionID
    }

    const rs = await ws.postToConnection(postParams).promise()
    console.log('Result', rs)

    return rs
}

module.exports = {
    send
}