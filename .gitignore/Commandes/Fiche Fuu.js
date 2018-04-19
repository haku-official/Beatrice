var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Fuu`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Inconnu")
        .addField("Prénom", "Fuu (フーー)")
        .addField("Âge", "16 Ans")
        .addField("sexe", "Masculin")
        .addField("Taille", "1 Mètres 76")
        .addField("Poids", "65 Kg")
        .addField("Orientation sexuelle", "Hétérosexuel")
        .addField("Races", "Mi-Humain/Mi-Esprit")
        .addField("Personnalité", "Il est très renfermé mais a un grand cœur. Il n'est pas très sociale et se sent un peu seul. Il est très féminin mais c'est un grand combattant. Sur le terrain de combat il est féroce et n'est plus le même.")
        .addField("Pouvoir", "Maîtrise l'eau à la perfection, peut contrôler  les esprits de l'eau grâce à sa mère. Quand il est là, la plus tombe. 😑, il est aussi capabale de créer et fermer des portails spatio-temporel.")
        .addField("Points Faibles", "Inconnu")
        .addField("Histoire", "Fuu est né dans le monde des esprits suite à une brèche, pour faire passer son père. Pendant la grande guerre des esprits dans ce monde, les parents de Fuu fut tué. Sa mère à pu créer un monde (Majiyusekai) pour le sauver, il fut accompagné par Beatrice ayant fait un pacte avec la mère de Fuu. Il fit peu de temps après un pacte avec moi. Fuu a grandi dans le monde créer par sa mère et à donc autoriser le passage aux humains, aux esprits,... Il est maintenant dirigeant de ce monde avec Aiichirō Seiteiki. Il lui a autorisé le passage pour le sauvé d'un autre monstre hybride voulant le tué.")
        .setImage('https://www.babelio.com/users/AVT_Anonyme_3730.png')
        .setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'FicheFuu'
};