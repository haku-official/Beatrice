const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setDescription("Information du serveur")
        .setColor("#33cccc")
        .setThumbnail(sicon)
        .addField("Nom du serveur", message.guild.name)
        .addField("test", message.guild.createdAt)
        .addField("Nombres d'utilisateur", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
    name: "info"
}
