const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //!coins
    if (!global.coins[message.author.id]) {
        global.coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = global.coins[message.author.id].coins;


    let coinEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#33cccc")
        .addField("💸", uCoins);

    message.channel.send(coinEmbed)

}

module.exports.help = {
    name: "coins"
}
