const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  var memberTotal = message.guild.memberCount;
  var bots = message.guild.members.cache.filter(m => m.user.bot).size;
  var people = memberTotal - bots;
  var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var memberEmbed = new discord.MessageEmbed()
    .setTitle("Membercount")
    .setColor("GREEN")
    .setDescription(`**Total members:** ${memberTotal} \n **Online:** ${online} \n **Bots:** ${bots} \n **Humans:** ${people}`);

    message.channel.send(memberEmbed);
}

module.exports.help = {
    name: "members",
    aliases: []
}