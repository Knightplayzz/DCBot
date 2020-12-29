const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Update info**")
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`© created by philippe#0354`)
    .setDescription(`**What is new in this update?** \n !new, !rps, !command, !howcommand, !review, !music, !tinfo, !add, !remove, !member, reactions-roles, !search, !play, aliases \n \n**When is the next update?** \n The next update is **1-01-2021**. \n \n **What is new in that update?** \n **!pause, !resume, !queue**.`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "update",
    aliases: []
}