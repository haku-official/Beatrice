const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if (args[0] == "help") {
        message.reply("Usage: !ban <user> <reason>");
        return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Je ne trouve pas cet utilisateur");
    let bReason = args.join(" ").slice(22);
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être bannie");

    let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#33cccc")
        .addField("Utilisateur Bannie", `${bUser} with ID ${bUser.id}`)
        .addField("Bannie par", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Bannie dans", message.channel)
        .addField("Le", message.createdAt)
        .addField("Raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incident");
    if (!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}