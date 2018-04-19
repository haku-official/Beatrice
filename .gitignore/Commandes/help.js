﻿var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');

bot.commands = new Discord.Collection();
var commandsList = fs.readFileSync('storage/help.txt', 'utf8')

exports.run = (bot, msg, args) => {

    msg.author.createDM().then(channel => {
        channel.send(commandsList)

    })
    msg.delete();
};



exports.help = {
    name: 'help'
};