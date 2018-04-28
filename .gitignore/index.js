var Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: false }, { autoReconnect: true });
var fs = require('fs');
var botconfig = require("./botconfig.json");
var tokenfile = require("./token.json");
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let purple = botconfig.purple;
let coins;
var commandsList = fs.readFileSync('storage/Bvn.txt', 'utf8')


//  m o n e y


//------------------- C O M M A N D E S  --------------------------------------------------------------

fs.readdir("./Commandes/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("`Erreur:` Cette commande n'existe pas");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./Commandes/${f}`);
        console.log(`${f} chargé!`);
        bot.commands.set(props.help.name, props);
    });
});



  

  //--------- CONNEXION DU BOT AVEC STATUS ------------------------
bot.on("ready", async () => {
    console.log(`Rem est connecté avec succès!`);
      bot.user.setActivity(` ;help | avec Fuu `, {type: "PLAYING"});
    
    });
  
    bot.on('ready', function() {
      bot.user.setUsername("Beatrice");
      
  });
  //------------------------------------------------------------
  
//bot.on('message', censure => {
  bot.on("message" , async message => {
    
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
   if (message.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) 
        
      
    {
      
        
      
        commandfile.run(bot,message,args);
    } else {
        message.reply("```❌| cette commande n'existe pas.```");  
        }
    }
  });

bot.on("guildMemberAdd", (member) => {
    if (member.guild.channels.has("438455650989899796")) {
        var chBienvenue = member.guild.channels.find('id', '438455650989899796');
        var embed = new Discord.RichEmbed()
            .setColor("#33cccc")
            .setThumbnail(member.user.avatarURL)
            .setAuthor("L'utilisateur est entré dans le serveur 👋🏻", 'https://media.discordapp.net/attachments/404897408548470796/414675570237112330/364443168470597633.png')
            .addField("🙋 | Nombres de personnes actuellement:", member.guild.memberCount, true)
            .setTitle("Bienvenue : " + member.user.username)
            .setFooter("Beatrice Développé par FUU | V1.0");

        chBienvenue.send(embed);
        console.log(member.user.username + "est entré dans le serveur");

        var bembed = new Discord.RichEmbed()
            .setColor("#33cccc")
            .setTitle("Bienvenue " + member.user.username)
            .setImage('https://images3.alphacoders.com/720/thumb-1920-720925.png')

        member.user.send(bembed);

        member.user.send(commandsList);

       

        

    }
});

bot.on("guildMemberRemove", (member) => {
    if (member.guild.channels.has("438455650989899796")) {
        var chBienvenue = member.guild.channels.find('id', '438455650989899796');
        var embed = new Discord.RichEmbed()
            .setColor("#33cccc")
            .setThumbnail(member.user.avatarURL)
            .setAuthor("L'utilisateur a quitté le serveur 👋🏻", 'https://media.discordapp.net/attachments/404897408548470796/414675570237112330/364443168470597633.png')
            .addField("🙋 | Nombres de personnes actuellement:", member.guild.memberCount, true)
            .setTitle("Sayōnara " + member.user.username)
            .setFooter("Beatrice Développé par FUU | V1.0");

        chBienvenue.send(embed);
        console.log(member.user.username + "a quitté le serveur");




    }
})

bot.on("message", async message => {
    coins = require("./coins.json");
    if (!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }

    let coinAmt = Math.floor(Math.random() * 15) + 1;
    let baseAmt = Math.floor(Math.random() * 15) + 1;
    console.log(`${coinAmt} ; ${baseAmt}`);

    if (coinAmt === baseAmt) {
        coins[message.author.id] = {
            coins: parseInt(coins[message.author.id].coins) + coinAmt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if (err) console.log(err)
        });
        let coinEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#33cccc")
            .addField("💸", `${coinAmt} coins gagné`);

        message.channel.send(coinEmbed).then(msg => { msg.delete(5000) });
    }

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

  

    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);

    if (!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }


    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp = curxp + xpAdd;
    if (nxtLvl <= xp[message.author.id].xp) {
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
            .setTitle("Level Up!")
            .setColor("#33cccc")
            .addField("Nouveau Level", curlvl + 1);

        message.channel.send(lvlup).then;
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });

    
});


bot.login(tokenfile.token);


