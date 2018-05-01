const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var osu = message.guild.roles.find(`name`, "|🎥GhibliFan🎥|");//ajouter
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
    message.channel.send("```Vous avez obtenu(e) le rôle |🎥GhibliFan🎥|```").then(msg => {msg.delete(5000)});

    let enterembed = new Discord.RichEmbed()
        .setDescription(`${message.author} est entré dans le monde`)
        .setColor("#33cccc")
        

    let incidentschannel = message.guild.channels.find(`name`, "général");
    if (!incidentschannel) return message.reply("Please create a incidents channel first!");
    incidentschannel.send(enterembed);
    
};

module.exports.help = {
    name: 'GFan'
};
