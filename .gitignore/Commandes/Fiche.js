var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Takuma`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Fulgur")
	.addField("Prénom", "Kai")
        .addField("Surnom", "Dragon de la foudre")
        .addField("Âge", "16 ans")
        .addField("sexe", "Masculin")
        .addField("Taille", "1m85")
        .addField("Poids", "75kg")
        .addField("Orientation sexuelle", "Hétérosexuelle")
        .addField("Races", "humain")
	.addField("Rôles","Chasseur de dragon")
        .addField("Pouvoir", "chasseur de dragon de  la foudre: ce pouvoir lui permet de terrasser des dragon mais pas que.	Forme dragon force: cette forme est reconnaissable aux écailles qui apparaissent sur le corps de kai. Elle augmente son pouvoir au maximum ainsi que sa vitesse et sa force musculaire.		Forme dragonique: sous cette forme, kai devient un dragon de foudre et lui confère la puissance d'un véritable dragon. ")
        .addField("Points Faibles", "Inconnu")
	.addField("Histoire", "abandonné par ses parents quand il été petit, il fut recueillis par un dragon qu'il lui apprit tout ce dont j'ai avais besoin de savoir, il lui apprit aussi la magie du chasseur de dragon de la foudre avant de disparaitre sans laisser aucune trace. Il cherche toujours à dépasser ses limites et à devenir plus fort.")
        .setImage('https://media.discordapp.net/attachments/427453254197182464/438682578799689728/9f1cd7b2f589c7f169a55c9543f9f928--blond-character-inspiration.jpg')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
