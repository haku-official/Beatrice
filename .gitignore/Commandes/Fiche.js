var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Kirito`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Pseudo du joueur", "Anastasia")
	.addField("Nom", "Karika")
        .addField("Prénom", "Shinatobe")
        .addField("Surnom", "L'Oni Shiro Nomu hito.")
        .addField("Âge", "Plusieurs centaine d'années")
        .addField("sexe", "Femme")
        .addField("Taille", "1m75")
        .addField("Poids", "62kg")
        .addField("Orientation sexuelle", "Bisexuelle")
        .addField("Races", "Oni")
        .addField("Personnalité", "Garçon très facile, il est assez cool dans la vie de tous les jours et n’aime vraiment pas se prendre la tête avec les autres. Il sourit toujours et son sourire fait sa bonne humeur. Malgré le fait qu’il se relâche trop, il adopte un côté sombre lorsque l’on s’approche trop près des personnes qu’il aime et peu se montrer violent si on leur veut du mal. L’on pourrait dire que c’est un « faux-calme ». Les responsabilités ne sont pas faites pour lui et préfère laisser les autres s’en occuper. Bien malgré son côté feignant, quand il le veut, il peut être une personne qui met beaucoup de cœur et d’intérêt dans son travail.")
        .addField("Pouvoir", "La maîtrise du Vent , il en fait ce qu'il veut")
        .addField("Points Faibles", "La sécheresse et les lieux sans air")
        .addField("Histoire", "Il est né à Kyoto au Japon , il as grandis dans un bonne famille , plutôt aisé , mais à la découverte de ses pouvoirs tout à changé , il suivait des cours intensif pour son entrainement , chaque jour il répétait les même geste , mais un jour ses parents furent attaquer par une sorte de monstre hybrides Aiichirō essaya de faire ce qu'il pouvait en utilisant ses pouvoirs mais en vain , ce' monstre était trop puissant , Aiichirō vu alors ses Parents mourir sous ses yeux..Aujourd'hui il essaye de vivre avec ce lourd fardeaux qui pèse sur lui , il est quelque peu renfermer sur lui même et à du mal à parler avec des inconnus ..Il n'as pas vraiment eu de petites copines dans sa vie alors sentimentalement , il a du mal..")
        .setImage('https://cdn.discordapp.com/attachments/427453254197182464/435394964332216322/Aronn_Btight_6.jpg')
        .setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'FicheChiro'
};
