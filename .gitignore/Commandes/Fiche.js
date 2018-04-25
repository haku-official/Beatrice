var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Anastasia`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
	.addField("Nom", "Karika")
        .addField("Prénom", "Shinatobe")
        .addField("Surnom", "L'Oni Shiro Nomu hito.")
        .addField("Âge", "Plusieurs centaine d'années")
        .addField("sexe", "Femme")
        .addField("Taille", "1m75")
        .addField("Poids", "62kg")
        .addField("Orientation sexuelle", "Bisexuelle")
        .addField("Races", "Oni")
        .addField("Personnalité", "Est quelqu'un qui adore se faire des amies et rencontré des personnes")
        .addField("Pouvoir", "Energie spirituelle: Peut contrôler au maximum 2 objet grâce a cette magie. Elle peut faire a peu près tout ce qu'elle veux de l'objet et peux retire son contrôle quand elle veux. Les deux énergie qu'elle contrôle sont stocké dans les deux boulles rouge de son vêtement ce qui peut être servit aussi comme arme. Force suroni: La Force Suroni est quelque chose de particulier ayant déjà la force d'une oni elle peut encore décuplé sa force mais cela que sous la condition qu'elle est un fort taux d'alcool dans le sang. Gōruden'ai: La définition de yeux dorée c'est un pouvoir particulier qui permet de donné l'illusion qu'elle veux a quelqu'un. ")
        .addField("Points Faibles", "Energie spirituelle: A force de faire ce pouvoir elle se fatigue et les boules se fissure. Force suroni: Nécessite un très fort taux d'alcool c'est a dire plusieurs litres de saké pasterisé. Gōruden'ai: La même illusion a très peu de chance de marché 2 fois.")
        .addField("Armes:","Les deux boules rouge de son vêtements.")
	.addField("Histoire", "A toujours était une grande buveuse dans les tavernes d'ou sont surnom d'Oni Shiro Nomu hito c'est a dire l'Oni Blanche buveuse. Elle aime bien bavardé avec les inconnues et récolte toute sorte d'infos sur ce qu'il se trame partout même si elle a l'air de juste vouloir parlé elle reste tout du moins quelqu'un qui aime l'inconnue. Le reste elle vous le raconteras en rp.")
        .setImage('https://cdn.discordapp.com/attachments/427453254197182464/438488948344487946/shinatobe_fearless_night_drawn_by_spike_wible__sample-2c6c02f6e633e2cf1569b54ccef335c6.png')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
