var Discord = require('discord.js');

exports.run = (bot, msg, args) => {

    var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Fiche de Beatrice`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("Prénom", "Beatrice (ベ ア ト リ ス)")
        .addField("Surnom", "Betty")
        .addField("Âge", "Plus de 400 ans (oui je fais 11-12 ans)")
        .addField("sexe", "Femme")
        .addField("Taille", "140cm")
        .addField("Races", "Esprit artificielle ")
        .addField("Personnalité", "J'ai des difficulté pour traiter les gens essayant de s'approcher de moi. Je suis plutôt solitaire.  J'adore les livres. Je suis surtout très strict")
        .addField("Pouvoir", "Yin Magic (Va chercher sur internet, j'vais pas t'expliquer)")
        .addField("Points Faibles", "T'as vraiment que je vias te les dire ?!")
        .addField("Histoire", "Il y a environ 400 ans, j'ai été créée par Echidna. Puis elle m'a formé. Je fit plusieurs pactes avec d'autres magicien mais ils sont tous décédés. Puis j'ai fait un pacte avec Fuu. Et depuis 5 ans je le respecte et l'écoute.")
        .setImage('https://images6.alphacoders.com/811/thumb-1920-811275.jpg')
        .setFooter("Beatrice Développé par FUU | V1.0 ")
        .setTimestamp()



    msg.delete();
    msg.channel.send(embed);

};



exports.help = {
    name: 'FicheBeatrice'
};