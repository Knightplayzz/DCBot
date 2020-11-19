const firstMessage = require('./first-message')

module.exports = bot => {
    const channelId = '778277728104480821'

    firstMessage(bot, channelId, 'hello wold', [])
}