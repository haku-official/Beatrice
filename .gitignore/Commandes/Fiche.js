var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de BiJiGiZ`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Prénom", "Artorias")
        .addField("Surnom", "la prêtresse sans sanctuaire")
        .addField("Âge", "28 ans")
        .addField("sexe", "Femme")
        .addField("Taille", "1m78")
        .addField("Poids", "73kg")
        .addField("Orientation sexuelle", "Bisexuelle")
        .addField("Races", "Oni")
        .addField("Personnalité", "elle posséde une personnalité gentille est juste, elle fait toujours ces choix en pensant aux autres avent elle.")
        .addField("Pouvoir", "Chakra intérieur : cette capacité lui permet d'améliorer ces capacité physique est peu même améliorer le tranchant de sa lame, l'orsqu'elle est bien concentrer elle arrive a se déplacer comme le vent.	Double accel : cette capacité lui permet de crée un double d'elle même. cette capacité de marche qu'en pleint accélération.	Reppuzan : cette capacité est une aura assez spécial a double tranchant, elle lui permet de découper d'un coup sec tous se quelle touche ( elle l'utilise seulement en cas d'urgence car l'utiliser lui pompe sont espérence de vie )")
        .addField("Points Faibles", "sa façon de penser aux autres avent elle ne lui ferrai pas hésiter une seconde a foncer dans le tats pour protéger quelle qu'un. / elle a un petit problème de vue, se qui fait qu'elle a du mal a voir très loin ( elle peu voir parfaitement jusqu'a 150m et vois trop flou au dela de 250m)")
        .addField("Armes:","Un long sabre (Reppumaru)")
	.addField("Histoire", "Tomoe est une encienne prétresse qui a du partir de sont foyer. elle semble être a la recherche de quelle que chose mais elle évite toujours le sujet. Elle se contante d'aider tous ceux qu'elle juge bonne personne est se promène en visitant le monde. pour améliorer sa faible vue elle a des lunette qu'elle ne porte pas en combat de peur de les perdre ou les casser.")
        .setImage('https://cdn.discordapp.com/attachments/427453254197182464/438505261276332032/shishou_cu_no_drawn_by_hisenkaede__ab1431b2386f1678217381b3fe266b60.jpg')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
