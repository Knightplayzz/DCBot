const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var categoryID = "779405637334466612";

   if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("No permissions");

   if(message.channel.parentID != categoryID) return message.reply("Wrong channel");

   var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

   if(!addUser) return message.reply("No member given!");

   var embedPrompt = new discord.MessageEmbed()
    .setTitle("Are you sure?")
    .setColor("GREEN")
    .setDescription(`Do you want to remove ${addUser}?`)
    .setFooter(`© created by philippe#0354`);

    var embed = new discord.MessageEmbed()
        .setTitle("Member removed")
        .setColor("GREEN")
        .setTimestamp()
        .setDescription(`Player removed: ${addUser}. \n Removed by: ${message.author}`)
        .setFooter(`© created by philippe#0354`);

        message.channel.send(embedPrompt).then(async msg => {

            message.delete();

            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            if(emoji == "✅") {

                msg.delete();

                message.channel.updateOverwrite(addUser, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: false,
                        SEND_MESSAGES: false,
                        ATTACH_FILES: false,
                        CONNECT: false,
                        ADD_REACTIONS: false,
                        VIEW_CHANNEL: false,
                        READ_MESSAGE_HISTORY: false});

                    message.channel.send(embed).then(msg => msg.delete({ timeout: 10000}));

                }else if(emoji == "❌"){

                    msg.delete();

                    message.reply("Member removed cancelled.").then(msg => msg.delete({ timeout: 5000 }));
                }

        });
        async function promptMessage(message, author, time, reactions) {

            time *= 1000;
        
            for (const reaction of reactions) {
                await message.react(reaction);
            }
        
            const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
        
            return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
        }
}


module.exports.help = {
    name: "remove",
    aliases: []
}