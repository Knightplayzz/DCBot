const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var prefix = botConfig.prefix

    var logChannel = message.guild.channels.cache.find(channel => channel.name === "log")

    const args = message.content.slice(prefix.length).split(/ +/);

    var targetUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");
 
    if(args[0] == null){

        var embed = new discord.MessageEmbed()
        .setTitle("**No player**")
        .setColor("RED")
        .setFooter(`© created by philippe#0354`)
        .setDescription(`You need to type the name op the player.`);
    
        return message.reply(embed);
      }

      var check = new discord.MessageEmbed()
      .setTitle("**Warn**")
      .setColor("RED")
      .setFooter(`© created by philippe#0354`)
      .setTimestamp()
      .setDescription(`${targetUser} heeft een warning \n **Reason:** ${reason}. \n **Warned by:** ${message.author}.`);
      

    var warn = new discord.MessageEmbed()
    .setTitle("**WARN**")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setTimestamp()
    .setDescription(`${targetUser} You have a warning \n **Reason:** ${reason}. \n **Warned by:** ${message.author}.`);

    message.channel.send(warn)
    logChannel.send(check)
}

module.exports.help = {
    name: "warn"
}