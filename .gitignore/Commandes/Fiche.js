var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de DÃRKŌS`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Takashi")
	.addField("Prénom", "Kelo")
        .addField("Surnom", "Keta")
        .addField("Âge", "17 ans")
        .addField("sexe", "Masculin")
        .addField("Taille", "1m75")
        .addField("Poids", "56 kg")
        .addField("Orientation sexuelle", "Bisexuel")
        .addField("Races", "Inconnu")
	.addField("Personnalité / Mentalité","Il a du charisme, gentil, attentioné")
        .addField("Pouvoir", "Magie, invisibilité")
	.addField("Armes","Couteau de toute matière, épée magique forgé par son père")
        .addField("Points Faibles", "Son coeur")
	.addField("Histoire", "Toute sa famille est morte depuis il est orphelin il essaye d'être adoptée")
        .setImage('https://cdn.discordapp.com/attachments/427453254197182464/438685092253007872/JPEG_20180410_140920.jpg')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
