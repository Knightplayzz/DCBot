const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Update**")
    .setColor("GREEN")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`**What is new in this update?** \n !announce fix, !role fix, !tempmute fix, role fixes, !update, !howcommand, !invite \n \n**When is the next update?** \n The next update is **20-11-2020**. \n \n **What is new in that update?** \n Bug fixes.`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "hello"
}