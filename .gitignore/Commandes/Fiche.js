var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de BiJiGiZ`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Prénom", "Artorias")
        .addField("Surnom", "Seigneur des Cendres")
        .addField("Âge", "376 ans")
        .addField("sexe", "Mâle")
        .addField("Taille", "1m90")
        .addField("Poids", "120 kg")
        .addField("Orientation sexuelle", "Aucune")
        .addField("Races", "Esprit corrompu")
        .addField("Personnalité", "Complètement perdu il ne sais plus quel est son but et affronte toutes personnes étant provocantes a ses yeux")
        .addField("Pouvoir", "Maîtrise des Cendres, Matérialisations de cendre, Force surnaturelle ")
        .addField("Points Faibles", "Bras gauche cassé donc par conséquent son flanc gauche est inoffensif     ")
        .addField("Armes:","Espadon ")
	.addField("Histoire", "Accompagner de son fidèle compagnon Sif le loup gris, il vas trouver Manus au fond des abysses et livrer une bataille épique avec cet ancien humain maintenant par les Ténèbres. Artorias va perdre et se faire corrompre à son tour par les ténèbres. Dans un dernier geste il vas protéger Sif avec son bouclier empêchant tout contacte avec le loup, mais lui enlevant par la même occasion toute ses chance de fuite ainsi que son bras gauche. Depuis ce jour Artorias erre seul avec pour seul souvenir Sif sans se rappeler de  ce qu’il lui est arriver ni quand es arriver.")
        .setImage('https://media.discordapp.net/attachments/427586463308447745/438665357947830303/248327c88e4eba0098e4e398d79c0460.png')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
