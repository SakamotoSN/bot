const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var prefix = ("k!")

bot.on('ready', function() {
    bot.user.setUsername("@Créature 👹")
    bot.user.setPresence({ game: { name: 'tuer des monstres'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    var msgauthor = message.author.id;
if (message.author.bot)return;
if(!db.get("xp").find({user: msgauthor}).value()){
db.get("xp").push({user: msgauthor, xp: 1}).write();   
}else{
    var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
    console.log(userxpdb);
    var userxp = Object.values(userxpdb)
    console.log(userxp)
    console.log(`Niveau : ${userxp[1]}`)
    db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1]+= 1}).write();
}
    if (message.content === prefix + "stats"){
        var xp = db.get("xp").filter({user: msgauthor}).find("xp").value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
        .setTitle(`Nombre de monstres tués par ${message.author.username}`)
        .setColor(0xff9900)
        .setThumbnail(message.author.avatarURL)
        .addField ("Monstres Tués :",`${xpfinal[1]}`)
        .setFooter("Konosuba ©")
        .setThumbnail(message.author.avatarURL)
        message.channel.send({embed: xp_embed});
    }
}
)
