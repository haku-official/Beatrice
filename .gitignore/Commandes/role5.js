const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var osu = message.guild.roles.find(`name`, "|📹Anime/MangaFan📖|");//ajouter
    //____________________________________________
    

    //___________________________________________________________________________

    try {
        message.member.addRole(osu);
        console.log("Le role " + osu.name + " a bien ajouté à " + message.author.username + " !");
    }
    catch (err) {
        console.log("Le role " + osu.name + " n'a pas pu être ajouté à " + message.author.username + " !");
    }
    message.delete().catch(O_o => { });
    message.channel.send("```Vous avez obtenu(e) le rôle |📹Anime/MangaFan📖|```").then(msg => {msg.delete(5000)});

    
        

    let incidentschannel = message.guild.channels.find(`name`, "général");
    if (!incidentschannel) return message.reply("Please create a incidents channel first!");
    incidentschannel.send(enterembed);
    
};

module.exports.help = {
    name: 'AMFan'
};
