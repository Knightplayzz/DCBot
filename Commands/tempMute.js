const discord = require("discord.js");
const ms = require("ms");

var botEmbedError = new discord.MessageEmbed()
.setDescription("**Command Error**")
.setColor("RED")
.addField(`**Error chould be**`, [
`**Error:** Spelling.`,
`**Error:** Permission.`,
`**Error:** Role does't exist.`,
`**Error:** No time given.`,
`**Error:** Can't mute a admin.`,
`**Error:** Can't find that person.`,

`\u200b`

])
.setFooter(`© created by philippe#0354`)




module.exports.run = async (client, message, args) => {

    var logChannel = message.guild.channels.cache.find(channel => channel.name === "log")

    var warn = new discord.MessageEmbed()
    .setTitle("**Mute**")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setTimestamp()
    .setDescription(`${mutePerson} is been muted. \n **Time** ${muteTime} \n **Muded by:** ${message.author}.`);

   if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(botEmbedError);
   
   if (!args[0]) return message.channel.send(botEmbedError);

   if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(botEmbedError);

   var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

   if (!mutePerson) return message.channel.send(botEmbedError);

   if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.channel.send(botEmbedError);

    var muteRole = message.guild.roles.cache.get('778341182987436042');
    if(!muteRole) return message.channel.send(botEmbedError);

    var muteTime = args[1];

    var botEmbedMute = new discord.MessageEmbed()
.setDescription("**You are muted!**")
.setColor("RED")
.addField(`**Player**`, [
`**Name:** ${mutePerson}`,
`**Time:** ${muteTime}`,

`\u200b`

])
.setFooter(`© created by philippe#0354`)

logChannel.send(warn)

var botEmbedUnmute = new discord.MessageEmbed()
.setDescription("**You are unmuted!**")
.setColor("GREEN")
.addField(`**Player**`, [
`**Name:** ${mutePerson}`,
`**Status:** Unmute`,

`\u200b`

])
.setFooter(`© created by philippe#0354`)




    if (!muteTime) return message.channel.send(botEmbedError);

    await(mutePerson.roles.add(muteRole.id));
    message.channel.send(botEmbedMute);

    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id)

        message.channel.send(botEmbedUnmute); 
        
    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}
