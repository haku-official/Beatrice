var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

	var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Nezumi Shayoka`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Nom", "Negoshi")
	.addField("Prénom", "Felt")
        .addField("Surnom", "Feeling")
        .addField("Âge", "16 ans")
        .addField("sexe", "Femme")
        .addField("Taille", "1m75")
        .addField("Poids", "52 kg")
        .addField("Orientation sexuelle", "Pan")
        .addField("Races", "Louve d'argent")
	.addField("Personnalité / Mentalité","Elle n'est pas très mature et s'énerve vite. Elle est plutôt vulgaire et désobéissante, rebelle et moqueuse. Elle n'est pas vraiment méchante, elle fait juste ce qu'elle souhaite sur le coup. Il lui arrive de sourire et de dire de douces paroles digne d'une mère ou d'une grande soeur, mais ça reste rare.")
        .addField("Pouvoir", "La Foudre d'Argent : elle allume son oeil d'une lueur bleue un peu argentée et l'utilise pour faire apparaître un éclair bleu et argenté n'importe où dans son champ de vision, mais ça lui consomme beaucoup d'énergie.")
	.addField("Armes","Hache géante avec la lame en ivoire")
        .addField("Points Faibles", "Son coeur, sa poitrine (:LewdMegumin:), son habitude à sous-estimer les autres et son sang non-froid.")
	.addField("Histoire", "Felt a perdu son meilleur ami il y a longtemps. Comment s'appelait-il ? Vous le saurez plus tard. Oh, mais je n'ai jamais dit qu'il était mort. Il est juste parti. Disparu ? Non, pas vraiment... Il est parti de son plein gré. Il ne voulait pas que sa chère Felt ne meure... Comment ? Pourquoi mourir ? Oh, ça... C'est à elle de vous le dire si elle le souhaite.")
        .setImage('https://images-ext-1.discordapp.net/external/1j4NpfAKvfp1VQxgQFUiD4f21QxTbdS0FZLnWnpY9aM/https/cdn.discordapp.com/attachments/364719805087088641/438696524483133441/Felt_Negoshi.png')
	.setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



	msg.delete();
	msg.channel.send(embed);

};



exports.help = {
	name: 'Fiche'
};
