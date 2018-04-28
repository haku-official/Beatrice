const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    //!pay @isatisfied 59345

    if (!coins[message.author.id]) {
        return message.reply("Vous n'avez pas d'argent!")
    }

    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if (!coins[pUser.id]) {
        coins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;

    if (sCoins < args[0]) return message.reply("Vous n'avez pas assez d'argent!");
    
    let coinsUser = parseInt(args[1]);
    if(isNaN(coinsUser))
    {
        return message.reply("Valeur incorrecte !");
    }
    
    coins[message.author.id] = {
        coins: sCoins - parseInt(args[1])
    };

    coins[pUser.id] = {
        coins: pCoins + 
    };

    message.channel.send(`${message.author} paye ${pUser} avec ${args[1]} coins`);

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) cosole.log(err)
    });


}

module.exports.help = {
    name: "payer"
}
