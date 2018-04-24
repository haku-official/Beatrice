var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');
bot.commands = new Discord.Collection();
var commandsList = fs.readFileSync('storage/help.txt', 'utf8')

module.exports.run = async (bot, message, args) => {

   exports.run = (bot, msg, args) => {

    msg.channel.send(commandsList);

};


};



exports.help = {
    name: 'help'
};
