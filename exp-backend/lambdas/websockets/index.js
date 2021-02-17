"use strict";

const __ = require('../../src/webSockets')
exports.handler = async (event) => {
    console.log('EVENT: ', event);

    const { routeKey } = event.requestContext;

    switch (routeKey) {
        case "$connect":
            return __.connect(event.requestContext)
        case "$disconnect":
            return __.disconnect(event.requestContext)
        case "$default":
            return __.isDefault()
        case "onMessage":
            return await __.onMessage(event.requestContext)
        default:
            break;
    }

    return "Hello, no case to handle";
};