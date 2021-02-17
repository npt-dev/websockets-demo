const Responses = require('../../utils/responses')

module.exports = () => {
    return Responses._200({ message: "default (your fault!!!)" });
}