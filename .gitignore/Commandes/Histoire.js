var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

    var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor("Histoire de Majiusekai")
        .addField("Le contexte", "Dans le monde de Majiyusekai, il y avait un peuple où les humains, les esprits,... vivaient en harmonies. Il se nommait le peuple de la nature. Il régnait sur le pays de Shizen. Dans ce pays, il y avait une multitude de forêts, de lac,... Mais il y avait, aux frontières, des zones inconnus de tous. Personnes ne les avaient explorés. Mais un jour un groupe d'aventurier, franchisèrent la frontière. Hélas personnes ne les revues...")
        .setFooter("Beatrice Développé par FUU | V1.0 ")

    msg.channel.send("chargement en cours..").then(m => m.edit(embed));

};



exports.help = {
    name: 'hdeb'
};
