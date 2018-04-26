const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("sigbot!")

bot.on('ready', function() {
    bot.user.setUsername("Sigbot")
    bot.user.setPresence({ game: { name: 'mentionner moi pour que je vous aide :3'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === "salut <@437179201284603904>"){
    message.reply("Konichiwa :3");
    console.log("une salutation a éter effectuer");
}
if (message.content === "ça va <@437179201284603904>"){
        message.reply("JUST MONIKA");
}
if (message.content === "merci <@437179201284603904>"){
    message.reply("c'est toujours un plaisir :D");
}
    if (message.content === "haut haut bas bas gauche droite gauche droite B A"){
        message.reply("ERR : TOO MANY LEVEL'S");
        }
     if (message.content === "<@437179201284603904>" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("info sur Sigbot")
    .setAuthor("Sig", "https://puyonexus.com/forum/download/file.php?avatar=1481_1311799010.png")
    .setColor(0x0086AE)
    .setDescription("le bot a éter crée juste pour faire de la programation , mais est partie bien plus loin que sa, il a été crée par @Sig qui c'est fais aidez par  @̶̶ۣۣۜۜ͜ζ͜͡▪) ρнคгยxтαภ  pour les petite erreur :D")
    .setFooter("pour plus d'info demander au créateur du bot :3", "https://orig00.deviantart.net/24f3/f/2015/305/4/e/sig_as_amitie__by_grimtales1lizzybird-d9f6ez9.png")
    .setImage("https://78.media.tumblr.com/9a209d8b2d826c25b70b0fa8e29aeb0f/tumblr_n96mqjeBdg1qmbwk5o1_r2_500.png")
    .setThumbnail("https://puyonexus.com/mediawiki/images/d/d9/Img201007.png")
    .setTimestamp()
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=437179201284603904&permissions=2146958583&scope=bot")
    .addField("le bot peu reagir avec 3 maniere ",
      "un texte \n le mentionner \n et utiliser le prefix")
    .addField("prefix du bot", "le prefix du bot est sigbot! mais il est possible qu'il change", false);
  
    message.channel.send({embed});
}
if (message.content === "hentai <@437179201284603904>"){
    message.reply("https://www.youtube.com/watch?v=5FjWe31S_0g&feature=youtu.be");
}
if (message.content === prefix + "help" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour le Sigbot")
    .setColor(0x0086AE)
    .setDescription("voici les commande que le bot peu faire :D")
    .setFooter("pour plus d'info demander a son créateur :3")
    .addField("commande qui devais etre drole",
      "lui dire salut (avec une mention a la fin) \n lui demander si ça va (avec une mention a la fin) \n lui dire merci (avec une mention a la fin) \n utiliser le konnami code \n lui dire hentai (avec une mention a la fin)")
      .addField("commande special",
      "sigbot!gif")
  
    message.channel.send({embed});
}
if (message.content === "sigbot!gif"){
    message.channel.send("on ce met au image et au gig maintenant \n alors preparais vous car on a atein une nouvelle aire de jeux", {
        file: "https://media.giphy.com/media/LOtqITm3tFmiA/giphy.gif" 
    });  
}
if(message.content === "sig!lose"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "https://78.media.tumblr.com/2b4deb2d385487b34f272ba15916b521/tumblr_ofipwwheNI1rypw9yo6_400.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
if(message.content === "sig!win"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "https://78.media.tumblr.com/5168cc03977978b9e03ebb97b99e1451/tumblr_ofipwwheNI1rypw9yo5_400.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
if(message.content === "sig!magic 1"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "https://78.media.tumblr.com/f6baae5013c9b7cbc1d1f7af004bc405/tumblr_ofipwwheNI1rypw9yo1_1280.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
if(message.content === "sig!magic 1"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "https://78.media.tumblr.com/f6baae5013c9b7cbc1d1f7af004bc405/tumblr_ofipwwheNI1rypw9yo1_1280.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
if(message.content === "sig!magic 2"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "https://78.media.tumblr.com/a0f76ff3f9cfd7df6a836dbf4815cc71/tumblr_ofipwwheNI1rypw9yo2_1280.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
if(message.content === "sig!magic 3"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "http://78.media.tumblr.com/fbe10ec5eeed5eb4d6b73183aa08b59c/tumblr_ofipwwheNI1rypw9yo4_1280.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
if(message.content === "sig!magic 4"){ //sig
    if("234368202379886593".includes(message.author.id))
        message.channel.send("", {
        file: "https://78.media.tumblr.com/e73d1acb290c292c6655d6fde48548cd/tumblr_ofipwwheNI1rypw9yo3_1280.gif"
    }) 
    else {
    message.channel.send("YOU SHALD NOT PASS")
    }
}
}
)
