var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Revenge`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Kinedai")
	.addField("Prénom", "Karuwa")
        .addField("Surnom", "kurara")
        .addField("Âge", "17 ans")
        .addField("sexe", "Femme")
        .addField("Taille", "1m73")
        .addField("Poids", "56 kg")
        .addField("Orientation sexuelle", "Bisexuelle")
        .addField("Races", "Démon")
	.addField("Personnalité / Mentalité","Elle a un caractère fort et persévérant, elle arrive a toujours avoir ce qu’elle veut. Elle est de nature joyeuse mais peut très vite s’énerver et faire n’importe quoi , à parfois un côté sadique.")
        .addField("Pouvoir", "La télékinésie et peut entendre ce que pense des personnes")
	.addField("Armes","Une grosse épée , et plusieurs autres épées")
        .addField("Points Faibles", "Son passé , elle évite d’en reparler et elle risque de fondre en larmes en y repensant ")
	.addField("Histoire", "Alors qu’elle était toute jeune , elle a vu sa famille et sa maison brûler sous ses yeux. Prise au piège par un autre démon qui était la cause de cet incendie , elle fut torturée jusqu’au jour où elle a réussi à se détacher et a tuer se démon , elle voyage longtemps , espérant trouver un lieu meilleur")
        .setImage('https://media.discordapp.net/attachments/427586463308447745/438699789454934016/image.png')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
