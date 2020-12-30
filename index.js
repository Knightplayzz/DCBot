const discord = require("discord.js");
const botConfig = require("./botConfig.json");
const fs = require ("fs");
const { join } = require("path");
var prefix = botConfig.prefix;

const bot = new discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
bot.login(process.env.token);

//music

const activeSongs = new Map();






//other shit

bot.commands = new discord.Collection()
bot.aliases = new discord.Collection()

bot.on("message", async message => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd === `${prefix}reactions`){
        let reactembed = new discord.MessageEmbed()
        .setTitle("Human verify")
        .setDescription("press ✅ to get verified")
        .setColor('GREEN')
        let msgEmbed = await message.channel.send(reactembed)
        msgEmbed.react('✅')
    }
})

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "767033408928743428"){
        if (reaction.emoji.name === '✅'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("767033925376802826")
        }
    }
})


bot.on("message", async message => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd === `${prefix}reactgames`){
        let reactembed = new discord.MessageEmbed()
        .setTitle("Reaction Roles")
        .setDescription("Chose your game(s)? -🔪 Among us \n -🚗 Rocket league \n -⛵ Sea of thieves \n -⛏️ Minecraft \n -<:roblox:768057622350921739> Roblox")
        .setColor('GREEN')
        let msgEmbed = await message.channel.send(reactembed)
        msgEmbed.react("🔪")
        msgEmbed.react("🚗")
        msgEmbed.react("⛵")
        msgEmbed.react("⛏️")
        msgEmbed.react("<:roblox:768057622350921739>")
    }
})

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "767037733998034944"){
        if (reaction.emoji.name === '🔪'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("767005792188235796")
        }
        if (reaction.emoji.name === '🚗'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("767007194633076756")
        }
        if (reaction.emoji.name === '⛵'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("767007507456458772")
        }
        if (reaction.emoji.name === '⛏️')
            await reaction.message.guild.members.cache.get(user.id).roles.add("767043328549715979")
        }
        if (reaction.emoji.name === '768057622350921739'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("778695528921301014")
        }
    }
)

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "767037733998034944"){
        if (reaction.emoji.name === '🔪'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("767005792188235796")
        }
        if (reaction.emoji.name === '🚗'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("767007194633076756")
        }
        if (reaction.emoji.name === '⛵'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("767007507456458772")
        }
        if (reaction.emoji.name === '⛏️')
            await reaction.message.guild.members.cache.get(user.id).roles.remove("767043328549715979")
        }
        if (reaction.emoji.name === '768057622350921739'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("778695528921301014")
        }
    }
)


bot.on("guildMemberAdd", member => {

    //var joinRole = member.guild.roles.cache.get('role id hier');
    //if (!joinRole) return;
    //member.roles.add(joinRole);

    var joinChannel = member.guild.channels.cache.get('767072977853349958');
    if (!joinChannel) return;

    //channel.send("welkem bij server.")

    var welcomeEmbed = new discord.MessageEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setDescription(`**Welcome to the server ${member.user.username}!**`)
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(`© created by philippe#0354`);

    joinChannel.send(welcomeEmbed);
})


bot.on("ready", async () => {
console.log(`is online.`);
bot.user.setActivity("Your problems", {
    type:"LISTENING"
} );
});

fs.readdir("./Commands/" , (err, files) => {
    if (err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <=0) {
        console.log("Kon geen files vinden");
        return;
    }
        
    jsFiles.forEach((f,i) => {
        var fileGet = require(`./Commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

        fileGet.help.aliases.forEach(alias => {
            bot.aliases.set(alias, fileGet.help.name);
        })
    });
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.typ === "dm") return;

    var messageArray = message.content.split(" ");
    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var senteceUser = "";
    var amountSwearWords = 0;

    for (let y = 0; y < messageArray.length; y++) {
        
        const word = messageArray[y].toLocaleLowerCase();
        
        var changeWord = "";

        for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

            if (word.includes(swearWords["vloekwoorden"][i])){

                changeWord = word.replace(swearWords["vloekwoorden"][i], "******");

                senteceUser += " " + changeWord;

                amountSwearWords++;
            }
        }

        if(!changeWord){
            senteceUser+= " " + messageArray[y];
        }
    }

    var warning = new discord.MessageEmbed()
    .setTitle("**YOU HAVE A WARNING**")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setTimestamp()
    .setDescription(`**User:** ${message.author} \n **Warning:** swearing`)

    var logChannel = message.guild.channels.cache.find(channel => channel.name === "log")

    var log = new discord.MessageEmbed()
    .setTitle("**WARN**")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setTimestamp()
    .setDescription(`**User:** ${message.author}. \n **Warning:** swearing.`);

    if (amountSwearWords !=0){

        message.delete();
        message.channel.send(senteceUser);
        logChannel.send(log)
        return message.channel.send(warning);
    }

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));

//music

    var options = {
        active: activeSongs
    };

    //other
   
    if (commands) commands.run(bot, message, arguments, options);
});