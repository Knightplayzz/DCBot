const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Music commands**")
    .setColor("GREEN")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`!p(url) |Plays a song. \n !leave | The bot leave the music channel `);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "music"
}