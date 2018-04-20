var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');

exports.run = (bot, msg, args) => {

    var embed = new Discord.RichEmbed()
        .setColor("#33cccc")
        .setAuthor(`Voici mes commandes`, 'https://cdn.discordapp.com/attachments/404897408548470796/414675570237112330/364443168470597633.png')
        .addField("ACTIONS", "`;hug <utilisateur>` - Pour faire un calin à un utilisateur `;kiss <utilisateur>` - Pour faire un bisou à un utilisateur `;pat <utilisateur>` - Pour carresser la tête d'un utilisateur `;poke <utilisateur>` - Pour poker un utilisateur `;slap <utilisateur>` - Pour donner une claque à un utilisateur `;punch <utilisateur>` - Pour donner une claque à un utilisateur")
        .addField("RÉACTIONS", "`;confus` - Pour montrer sa confusions `;pout` - Pour bouder `;smug` - Pour rire légèrement `;stare` - Pour regarder")
        .addField("RP", "`;coins` - Pour voir son argent `;hdeb` - Pour voir le début de l'histoire du serveur `;payer <utilisateur> <quantité d'argent donner>` - Pour payer un utilisateur `;FicheChiro` - Pour voir la fiche de Aiichirō Seiteiki `;FicheBeatrice` - Pour voir la fiche de Beatrice `;FicheFuu` - Pour voir la fiche de Fuu `;level - Pour voir son level")
        .addField("GÉNÉRAL", "`;help` - Pour afficher les commandes de Beatrice `;ping` - Pour voir son ping `;report <utilisateur> <raison>` Pour signaler le mauvais comportement d'un utilisateur")
        .setFooter("Beatrice Développé par FUU | V1.0 ")



    msg.delete();
    member.user.send(embed);
};



exports.help = {
    name: 'help'
};
