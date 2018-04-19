const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var osu = message.guild.roles.find(`name`, "|Journal|");//ajouter
    

    try {
        message.member.addRole(osu);
        console.log("Le role " + osu.name + " a bien ajouté à " + message.author.username + " !");
    }
    catch (err) {
        console.log("Le role " + osu.name + " n'a pas pu être ajouté à " + message.author.username + " !");
    }
    

    let journalEmbed = new Discord.RichEmbed()
        .setDescription(`${message.author} peut maintenant lire le journal`)
        .setColor("#33cccc")

    msg.delete();
    message.channel.send(journalEmbed).then(msg => { msg.delete(5000) });
    
    
};

module.exports.help = {
    name: 'journal'
};
