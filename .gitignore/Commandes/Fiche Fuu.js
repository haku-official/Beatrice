var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Fuu`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Inconnu")
        .addField("Prénom", "Fuu (フーー)")
        .addField("Âge", "Inconnu")
        .addField("sexe", "Masculin")
        .addField("Taille", "Inconnu")
        .addField("Poids", "Inconnu")
        .addField("Orientation sexuelle", "Inconnu")
        .addField("Races", "Mi-Humain/Mi-Esprit")
        .addField("Personnalité", "Fuu est une personne très solitaire. Il est aussi distant des autres personnes et n'est pas très sociale. ")
        .addField("Pouvoir", "Maîtrise l'eau à la perfection, peut contrôler  les esprits. Quand il est là, la plus tombe. 😑, il est aussi capabale de créer et fermer des portails spatio-temporel.")
        .addField("Points Faibles", "Inconnu")
        .addField("Histoire", "Le passé de Fuu est pour l'instant inconnu. Il habite dans le château des dirigeants dans la cité du pays de Shizen. Il a pour habitude de partir voyager dans le pays. Pour l’instant personne ne sait sa localisation. Une rumeur raconte qu'il ferait parti des personnes ayant franchies la frontière. ")
        .setImage('https://www.babelio.com/users/AVT_Anonyme_3730.png')
        .setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'FicheFuu'
};
