const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var osu = message.guild.roles.find(`name`, "• SANS FICHES •");//ajouter
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
    message.channel.send("```Vous avez obtenu(e) le rôle • SANS FICHES •, vous pouvez maintenant avoir accès à la partie RP```").then(msg => {msg.delete(5000)});


   
    
};

module.exports.help = {
    name: 'rp'
};
