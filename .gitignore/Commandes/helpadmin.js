var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

    var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor("Histoire de Majiusekai")
        .addField("Les débuts", "Le monde de Majiyusekai est un monde parallèle qui a été crée il y a des milliards d'années en même temps que la terre. Son accessibilité est due à une brèche temporels dans tous les mondes (mondes des humains, monde des esprits,...). Depuis qu'il y a des habitants dans ce monde, la paix perdure. Moi, Beatrice, je suis la protectrice de ce monde depuis toutes petites. Mes parents (esprits) protégeaient aussi ce monde. Toutes les surfaces du monde n'ont pas encore été découvertes. Les ancêtres auraient vécu là-bas...")
        .setFooter("Beatrice Développé par FUU | V1.0 ")

    msg.channel.send("chargement en cours..").then(m => m.edit(embed));

};



exports.help = {
    name: 'hdeb'
};
