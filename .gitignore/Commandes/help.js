var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');
bot.commands = new Discord.Collection();
var commandsList = fs.readFileSync('storage/help.txt', 'utf8')

exports.run =  async (member) => {

    member.user.send(commandsList);

};



exports.help = {
    name: 'help'
};
