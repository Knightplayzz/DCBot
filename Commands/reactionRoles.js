const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embedGames = new discord.MessageEmbed()
    .setTitle("What games do you play?")
    .setColor("GREEN")
    .setFooter("© created by philippe#0354")
    .setDescription("-🔪 Among us \n -🚗 Rocket league \n -⛵ Sea of thieves \n -⛏️ Minecraft");


message.channel.send(embedGames).then(async msg => {

    var emoji = await promptMessage(msg, message.author, ["🔪", "🚗", "⛵", "⛏️"]);

    if (emoji === "🔪") {

        var role1 = ('779636811218550794');

        member.roles.add(role1);
    }
    if (emoji === "🚗") {

        var role2 = ('779636917095759872');

        member.roles.add(role2);
    }
    if (emoji === "⛵") {

        var role3 = ('779636961522221057');

        member.roles.add(role3);
    }
    if (emoji === "⛏️") {

        var role4 = ('779637018435125259');

        member.roles.add(role4);
    }
})
}
async function promptMessage(message, author, reactions){
    for (const reaction of reactions) {
        await message.react(reaction);
    }
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}
if (err) return console.log(err);

module.exports.help = {
    name: "reactions"
}