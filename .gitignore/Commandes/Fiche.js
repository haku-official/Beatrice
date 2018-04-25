var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Merry`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Kanesada")
	.addField("Prénom", "Izuminokami")
        .addField("Surnom", "izumi")
        .addField("Âge", "17 ans")
        .addField("sexe", "Homme")
        .addField("Taille", "1m79")
        .addField("Poids", "70 kg")
        .addField("Orientation sexuelle", "Hétérosexuel")
        .addField("Races", "Humain")
	.addField("Personnalité / Mentalité","Izumi se laisse emporter par ses sentiments et perd son calme à la moindre provocation. Rancunier, il n'hésite pas à se venger lorsqu'un tord lui est causé. A l'inverse, il se montre très loyal envers ceux qui gagnent sa confiance. Il tiendra toujours ses promesses et veillera à respecter sa parole d'honneur. Il ne laissera pas ses amis tomber et restera fidèle mais franc. Izumi est un une personne solitaire  qui aime la tranquillité mais aime aussi les bagarres.")
        .addField("Pouvoir", "Manipule les Chroniqueurs les esprit. Manipulation des os")
	.addField("Armes","Katana + Un livre")
        .addField("Points Faibles", "Son tempérament explosif. Son envie de se vanger pour une tromperie. Son franc parlé")
	.addField("Histoire", "Il était un enfant triste et sans amis , Alors que la plupart des enfants passaient du temps avec leurs familles . Les parents d'Izumi étaient très pauvres , Sa mère était une femme stricte qui restait à la maison et avait déscolarisé Izumi.  Son père travaillait de longues heures au port de la ville pour soutenir sa famille, même si une grande partie de ses gains servait à l'achat et la consommation de grandes quantités d'alcool à la fin de son quart de travail. Parfois, il rentrait ivre après avoir été chassé de tous les bars Occasionnellement, il était violent et battait sauvagement la mère d'Izumi, puis, quand il avait fini, il avait sur elle une rage sexuelle ivre...seulement un jours ....son père tua sa mère violement étant ivre totalement et prit la fuite. Puis izumi travaille alors pour devenir chasseur de prime ")
        .setImage('https://media.discordapp.net/attachments/438671787652415507/438672243770261506/e2ffa80ea269114bb40f4043e11a584b.jpg?width=632&height=911')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
