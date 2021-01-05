const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Ticket Information**")
    .setColor("BLUE")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`!ticket | New ticket \n !close | Close a ticket \n !add | Add a mbr to a ticket \n !remove | remove a mbr from a ticket`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "tinfo",
    aliases: ["ticketinfo"]
}