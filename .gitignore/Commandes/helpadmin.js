
var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');

bot.commands = new Discord.Collection();
var commandsList = fs.readFileSync('storage/help admin.txt', 'utf8')

exports.run = (bot, msg, args) => {

    member.user.send(commandsList);

};


exports.help = {
    name: 'helpadmin'
};
