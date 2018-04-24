var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');
bot.commands = new Discord.Collection();
var commandsList = fs.readFileSync('storage/help.txt', 'utf8')

module.exports.run = async (bot, message, args) => {

       try {
        await tomute.send(`Tu a été rendu muet pendant ${mutetime}.`)
    } catch (e) {
        message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
    }

};



exports.help = {
    name: 'help'
};
