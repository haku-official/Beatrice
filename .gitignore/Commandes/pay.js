const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    //!pay @isatisfied 59345

    if (!global.coins[message.author.id]) {
        return message.reply("Vous n'avez pas d'argent!")
    }

    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if (!global.coins[pUser.id]) {
        global.coins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = global.coins[pUser.id].coins;
    let sCoins = global.coins[message.author.id].coins;

    if (sCoins < args[0]) return message.reply("Vous n'avez pas assez d'argent!");
    
    let coinsUser = parseInt(args[1]);
    if(isNaN(coinsUser))
    {
        return message.reply("Valeur incorrecte !");
    }
    
    global.coins[message.author.id].coins = sCoins - coinsUser;

    global.coins[pUser.id].coins = pCoins + coinsUser;

    message.channel.send(`${message.author} paye ${pUser} avec ${args[1]} coins`);

    if(!fs.existsSync("./coins.json")){
        return console.log("Ce fichier n'existe pas !");
    }
    
    fs.writeFile("./coins.json", JSON.stringify(global.coins), (err) => {
        if (err) console.log(err)
    });


}

module.exports.help = {
    name: "payer"
}
