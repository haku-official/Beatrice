const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if (args[0] == "help") {
        message.reply("Usage: !kick <user> <reason>");
        return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être explusée");

    let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#33cccc")
        .addField("Utilisateur explusé:", `${kUser} with ID ${kUser.id}`)
        .addField("Explusé par", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Explusé dans", message.channel)
        .addField("Le", message.createdAt)
        .addField("Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incident");
    if (!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
}