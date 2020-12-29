const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // sps steen, papier, schaar

    if (!args[0]) return message.reply("use rps <rock, paper, scissors>");

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "ROCK") {

        if (result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, I win`);

        } else if (result == "scissors") {

            return message.channel.send(`I have ${result} :scissors:, you win`);
        } else if (result == "rock") {

            return message.channel.send(`I have ${result} :moyai:, draw`);

        }

    }
    else if (args[0].toUpperCase() == "PAPER") {

        if (result == "scissors") {

            return message.channel.send(`I have ${result} :scissors:, I win`);

        } else if (result == "rock") {

            return message.channel.send(`I have ${result} :moyai:, you win`);

        } else if (result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, draw`);

        }

    } else if (args[0].toUpperCase() == "SCISSORS") {

        if (result == "rock") {

            return message.channel.send(`I have ${result} :moyai:, I win`);

        } else if (result == "paper") {

            return message.channel.send(`I have ${result} :notepad_spiral:, you win`);

        } else if (result == "scissors") {

            return message.channel.send(`I have ${result} :scissors:, draw`);

        }

    }

}

module.exports.help = {
    name: "rps",
    aliases: ["sps", "rockpaperscissors", "steenpapierschaar"]
   
}