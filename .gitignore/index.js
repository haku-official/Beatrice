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
      bot.user.setActivity(` ;//help | avec Ikko `, {type: "PLAYING"});
    
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
    if (member.guild.channels.has("506584077466337281")) {
        var chBienvenue = member.guild.channels.find('id', '506584077466337281');
        var embed = new Discord.RichEmbed()
            .setColor("#33cccc")
            .setThumbnail(member.user.avatarURL)
            .setAuthor("L'utilisateur est entré dans le serveur 👋🏻", 'https://media.discordapp.net/attachments/404897408548470796/414675570237112330/364443168470597633.png')
            .addField("🙋 | Nombres de personnes actuellement:", member.guild.memberCount, true)
            .setTitle("Bienvenue : " + member.user.username)
            .setFooter("Beatrice Développé par Ikko | V1.0");

        var bembed = new Discord.RichEmbed()
            .setColor("#33cccc")
            .setTitle("Bienvenue sur Orario, je te conseille de faire un tour dans le salon #Règlement puis de nous faire un petit coucou dans le salon #Général" + member.user.username)

        member.user.send(bembed);

        member.user.send(commandsList);

       

        

    }
});

bot.on("guildMemberRemove", (member) => {
    if (member.guild.channels.has("506584077466337281")) {
        var chBienvenue = member.guild.channels.find('name', '🤡-bienvenue');
        var embed = new Discord.RichEmbed()
            .setColor("#33cccc")
            .setThumbnail(member.user.avatarURL)
            .setAuthor("L'utilisateur a quitté le serveur 👋🏻")
            .addField("🙋 | Nombres de personnes actuellement:", member.guild.memberCount, true)
            .setTitle("Sayōnara " + member.user.username)
            .setFooter("Beatrice Développé par Ikko | V1.0");

      


    }
})



bot.login(tokenfile.token);
