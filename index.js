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
        message.channel.send("", {
        file: "https://78.media.tumblr.com/2b4deb2d385487b34f272ba15916b521/tumblr_ofipwwheNI1rypw9yo6_400.gif"
    }) 
}
if(message.content === "sig!win"){ //sig
        message.channel.send("", {
        file: "https://78.media.tumblr.com/5168cc03977978b9e03ebb97b99e1451/tumblr_ofipwwheNI1rypw9yo5_400.gif"
        })
}
if(message.content === "sig!magic 1"){ //sig
        message.channel.send("", {
        file: "https://78.media.tumblr.com/f6baae5013c9b7cbc1d1f7af004bc405/tumblr_ofipwwheNI1rypw9yo1_1280.gif"

    })
}
if(message.content === "sig!magic 1"){ //sig
        message.channel.send("", {
        file: "https://78.media.tumblr.com/f6baae5013c9b7cbc1d1f7af004bc405/tumblr_ofipwwheNI1rypw9yo1_1280.gif"
    }) 
}
if(message.content === "sig!magic 2"){ //sig
        message.channel.send("", {
        file: "https://78.media.tumblr.com/a0f76ff3f9cfd7df6a836dbf4815cc71/tumblr_ofipwwheNI1rypw9yo2_1280.gif"
    })
}
if(message.content === "sig!magic 3"){ //sig
        message.channel.send("", {
        file: "http://78.media.tumblr.com/fbe10ec5eeed5eb4d6b73183aa08b59c/tumblr_ofipwwheNI1rypw9yo4_1280.gif"
    })
}
if(message.content === "sig!magic 4"){ //sig
        message.channel.send("", {
        file: "https://78.media.tumblr.com/e73d1acb290c292c6655d6fde48548cd/tumblr_ofipwwheNI1rypw9yo3_1280.gif"
    }) 
}
if(message.content === "Xarrin!nickel"){ //Xarrin
        message.channel.send("", {
        file: "https://media1.tenor.com/images/996279409bcab56de0f7fce3d135a84c/tenor.gif"
    }) 
}
if(message.content === "Xarrin!Invocation:Byakko"){ //Xarrin
        message.channel.send("", {
        file: "https://cdn.discordapp.com/attachments/434681503964725248/435060807118749700/SF_Byakko.png"
    }) 
}
if(message.content === "Xarrin!voyeur"){ //Xarrin
        message.channel.send("", {
        file: "https://i.pinimg.com/originals/07/d3/ac/07d3ac2dcfc4597b4d0da463fa8b0003.gif"
    }) 
}
if(message.content === "Xarrin!Invocation:Phoenix"){ //Xarrin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439059526575063040/m035c10.png"
})
}

if(message.content === "Lucas!KC"){ //MME POOF
        message.channel.send("", {
        file: "https://31.media.tumblr.com/b4bb500c7d05b0f44e0fd4c35020e3eb/tumblr_inline_ofauryqfpQ1s9x8us_500.gif"
    }) 
}
if(message.content === "Lucas!FTW"){ //MME POOF
        message.channel.send("Ma réponce :", {
        file: "https://i.skyrock.net/0358/84470358/pics/3103693573_1_17_ENJacXlx.gif"
    }) 
}
if(message.content === "Lucas!MrPuel"){ //MME POOF
        message.channel.send("¡Hola!", {
        file: "https://thumbs.gfycat.com/DentalHealthyAcornweevil-max-1mb.gif"
    }) 
}
if(message.content === "yuki!invocation:Godness"){ //yuki
        message.channel.send("", {
        file: "https://cdn.discordapp.com/attachments/434681503964725248/435078318610710539/Goddess.png"
    }) 
}
if(message.content === "Xarrin!gral"){ //xarin
    message.channel.send("La solitude c'est quand karma il vas sur mer\nLa solitude c'est quand il est bourré dans un verre\n-----\nIl répond au nom de karma On dirais pas forcément mais il en a du karma\nNous on en peut plus de son karma\n-----\n La solitude c'est quand Lucas se prend un vent\nLa solitude c'est au moment ou il se prend du blanc\n-----\n Il répond au nom de lucas\nnon il ne mange pas encore de caca\nCar il était caché dans un placard\n -----\n La solitude c'est quand Xarrin  il mange son pain\nLa solitude c'est comme son fil il est tout fin\n-----\nil répond au nom de Xarrin\nXarrin, il aime allé touché des sein\nXarrin, il aime allé boire du Vin en touchant des popotins");
}
if(message.content === "Xarrin!invocation:spiritwater"){ //xarrin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071187570655232/elemental_01.png"
}) 
}
if(message.content === "Xarrin!invocation:spiritearth"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071278964408330/elemental_02.png"
}) 
}
if(message.content === "Xarrin!invocation:spiritwind"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071361919352842/elemental_03.png"
}) 
}
if(message.content === "Xarrin!invocation:spiritfire"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439071422992744448/elemental_04.png"
}) 
}
if(message.content === "Xarrin!invocation:Kuro"){ //xarin
    message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/434681503964725248/439133776849797122/d825bf93ca36fdcbf62091b1cc4e6936.png"
}) 

if(message.content === "mp!help"){ //MME POOF HELP

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Madame Pouf posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/432275341202030614/435096117504638986/unknown.png")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "Lucas!KC\nLucas!FTW\Lucas!MrPuel\nLucas!MrPuel")
      .addField("image",
      "rien") 

    message.channel.send({embed});
}
if(message.content === "yuki!help"){ //yuki help

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Yuki posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/434681503964725248/435083973069373441/ange_manga_n1.jpg")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "rien")
    .addField("image",
      "yuki!invocation:Godness")

    message.channel.send({embed});
}
if(message.content === "koro!help"){ //koro help

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que koro posséde")
    .setThumbnail("https://media.giphy.com/media/133FgIVnM1g70k/giphy.gif")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "Koro!travaille")
      .addField("image",
      "aucun")

    message.channel.send({embed});
}
if(message.content === "sig!help"){ //sig help

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que sig posséde")
    .setThumbnail("https://image.gamer.ne.jp/news/2011/20110727/00018cb052ae8768e94585c1314982a7a0cc/o/17.jpg")
    .setFooter("pour plus d'info va te voir vue que c'est toi qui la crée xD")
    .addField("gif",
      "sig!win \nsig!lose\nsig!magic 1\nsig!magic 2\nsig!magic 3\n sig!magic 4")
      .addField("image",
      "aucun")

    message.channel.send({embed});
}
if(message.content === "magie!help"){ //magie
 
    const embed = new Discord.RichEmbed()
    .setTitle("commande magique")
    .setColor(0x0086AE)
    .setDescription("table des éléments de magie")
    .addField("magie utilisable",
      "magie!nature\nmagie!eau\nmagie!feu")


    message.channel.send({embed});
}
if(message.content === "Xarrin!help"){ //Xarrin help
 
    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Xarrin posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/434681503964725248/435060807118749700/SF_Byakko.png")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "Xarrin!nickel\nXarrin!voyeur")
      .addField("image",
      "Xarrin!Invocation:Byakko\nXarrin!Invocation:Phoenix\nXarrin!invocation:spiritwater\nXarrin!invocation:spiritearth\nXarrin!invocation:spiritwind\nXarrin!invocation:spiritfire")

    message.channel.send({embed});
}
}
if(message.content === "magie!nature"){ //magie
    message.channel.send(`**${member.user.username}** lance une attaque magique naturel`, {
    file: "http://media.toucharger.fr/web/toucharger/upload/image_domain/2/6/26509/160x120-26509.gif"
})
}
if(message.content === "magie!eau"){ //magie
    message.channel.send(`**${member.user.username}** lance une attaque magique d'eau`, {
    file: "http://galeriedesartistes.g.a.pic.centerblog.net/79812522.gif"
}) 
}
if(message.content === "magie!feu"){ //magie
    message.channel.send(`**${message.author.username}** lance une attaque magique de feu`,{
    file: "http://www.cheminee-poele-bordeaux.fr/wp-content/uploads/2014/09/flamme-gif.gif"
})
}
if(message.content === "magie!éclair"){ //magie elect
    message.channel.send(`**${message.author.username}** lance une attaque magique élèctrique`,{
    file: "https://cdn.discordapp.com/attachments/434750011771977739/439130838559490052/02.gif"
})
}
if(message.content === "magie!ténèbre"){ //magie voids
    message.channel.send(`**${message.author.username}** lance une attaque magique ténèbreuse`,{
    file: "https://cdn.discordapp.com/attachments/434750011771977739/439130817097236481/6e5f4ce3b0f5ea1c28d9788aa2a6eb376a041314_hq.gif"
})
}
}
)
