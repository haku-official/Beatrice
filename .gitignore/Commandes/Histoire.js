var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

    var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor("Histoire de Majiusekai")
        .addField("Les débuts", "Dans le monde des esprits, il y a 7ans, une guerre éclata. La plus puissante des esprits de l'eau (la mère de Fuu) créa un monde qui a pris le nom de Majiyusekai. Au début, il n'y avait que Fuu et moi puis,  se fut l'arrivée de Aiichirō. Plus le temps avançait et plus les personnes arrivèrent les unes après les autres. Des animaux, des humains, des esprits,... Ce monde était rempli d'harmonie.")
        .setFooter("Beatrice Développé par FUU | V1.0 ")

    msg.channel.send("chargement en cours..").then(m => m.edit(embed));

};



exports.help = {
    name: 'hdeb'
};