const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Music commands**")
    .setColor("GREEN")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`!p(url) |Plays a song. \n !leave | The bot leave the music channel \n !search | Search the name of the song \n !pause | Pause the song.`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "music",
    aliases: ["musiccommands", "musiccommand", "musicinfo"]
}