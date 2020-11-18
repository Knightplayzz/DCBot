const discord = require("discord.js");

module.exports.run = client => {
    const channelId = '778345716304052244' //welcome channel

    client.on('guildMemberAdd', (member) => {    

        const message = `Welcome <@${member.id} to the server!`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })

}