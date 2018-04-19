const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var osu = message.guild.roles.find(`name`, "• HABITANTS •");//ajouter
    var rip = message.guild.roles.find(`name`, "étranger");//retirer
    //____________________________________________
    try {
        message.member.removeRole(rip);
        console.log("Le role " + rip.name + " a bien été retiré !");
    }
    catch (err) {
        console.log("Le role " + rip.name + " a voulu être retiré mais le joueur " + message.author.username + " n'appartenait pas à ce rôle");
    }
    //___________________________________________________________________________

    try {
        message.member.addRole(osu);
        console.log("Le role " + osu.name + " a bien ajouté à " + message.author.username + " !");
    }
    catch (err) {
        console.log("Le role " + osu.name + " n'a pas pu être ajouté à " + message.author.username + " !");
    }
    message.delete().catch(O_o => { });
    message.channel.send("```Entrer par la majestueuse porte de Majiyusekai...```")

    let enterembed = new Discord.RichEmbed()
        .setDescription(`${message.author} est entré dans le monde`)
        .setColor("#33cccc")
        

    let incidentschannel = message.guild.channels.find(`name`, "général");
    if (!incidentschannel) return message.reply("Please create a incidents channel first!");
    incidentschannel.send(enterembed);
    
};

module.exports.help = {
    name: 'entrer'
};
