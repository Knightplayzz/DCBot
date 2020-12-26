const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var categoryID = "779405637334466612";

   if(!message.member.hasPermisson("KICK_MEMBERS")) return message.reoky("No permissions");

   if(message.channel.parentID != categoryID) return message.reply("Wrong channel");

   var addUser = message.guild.member(message.mentions,users.first() || message.guild.members.cache.get(args[0]));

   if(!addUser) return message.reply("No member given!");

   var embedPrompt = new discord.MessageEmbed()
    .setTitle("Are you sure?")
    .setColor("GREEN")
    .setDescription(`Do you want to add ${addUser}?`)
    .setFooter(`© created by philippe#0354`);

    var ebed = new discord.MessageEmbed()
        .setTitle("Member added")
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`Player added: ${addUser}. \n Added by: ${message.author}`)
        .setFooter(`© created by philippe#0354`);

        message.channel.send(embedPrompt).then(async msg => {

            message.delete();

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if(emoji == "✅") {

                msg.delete();

                message.channel.updateOverwrite(addUser, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true});

                    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000}));

                }else if(emoji == "❌"){

                    msg.delete();

                    message.reply("Member added cancelled.").then(msg => msg.delete({ timeout: 5000 }));
                }
        });
};

module.exports.help = {
    name: "add"
}