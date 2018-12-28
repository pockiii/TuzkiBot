//const challenger = require('./challenger');
const tuzki = require('./tuzki');

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.usernname} is online!`);
  bot.user.setActivity("uwu");
});

var isActive = true;
var hash={};

bot.on("message", async message => {
  if(message.author.bot) return;
  let prefix = botconfig.prefix;
  let cmd = message.content.toLowerCase();

  if(cmd === `${prefix}play` && isActive){
    if(message.member.voiceChannel){
      isActive = false;
      const streamOptions = { seek: 0, volume: 1 };
        var voiceChannel = message.member.voiceChannel;
          voiceChannel.join().then(connection => {
              console.log("joined channel");
              play(connection, streamOptions);
          }).catch(err => console.log(err));
      } else {
        message.channel.send("You must be in a voice channel");
      }
  }
  if(message.attachments.size > 0){
    console.log("hi");
    challenger.update(message, bot);
  }
  if(cmd === `${prefix}`){
    message.channel.send("[**]play/song/stop");
  }
  if(message.content ===  `${prefix}help`) {
    message.channel.send("Help");
  }
  if(message.content ===  `${prefix}stop`) {
    console.log("left channel");
    message.guild.voiceConnection.disconnect();
    isActive = true;
  }
  if(message.content ===  `${prefix}song`) {
    message.channel.send(songurl);
  }
  if(message.content ===  `${prefix}t`) {
    tuzki.update(message, bot);
  }
  if(message.content.startsWith(`${prefix}super add`)) {
    message.channel.send("I am Tam");
      var lines = message.content.split('\n');
      message.channel.send(lines.length);
      for(var i = 1;i < lines.length;i++){
          hash[lines[i].split("|")[0]] = line[i].split("|")[1];
      }
  }
  if(message.content.startsWith(`${prefix}add`) && message.member.roles.find("name", "Divine Regulars")) {
    var k = message.content.match(/'[\w\s.!?\\-]+'/g)[0].slice(1, -1);
    var v = message.content.match(/'[\w\s.!?\\-]+'/g)[1].slice(1, -1);
    hash[k] = v;
  }
  if(message.content.startsWith(``) && message.content.substring(0, message.content.length) in hash) {
    message.channel.send(hash[message.content.substring(0, message.content.length)]);
  }
  if(message.content ===  `${prefix}list`) {
    Object.keys(hash).forEach(function(key) {
      value = hash[key];
      message.channel.send(key + "|" + value);
  });
}

});

function play(connection, streamOptions){
  console.log("running play");
  var songs = ["watch?v=jaiy8NOrGak","watch?v=wcU8JHV6Aow","watch?v=_vvUuoj2Y3I","watch?v=Iife8qwn1f8",
  "watch?v=YVDIxfI4vZI","watch?v=HjCzmwqxIjs","watch?v=W1J8aKgq474","watch?v=M6ajxG4t7L4",
  "watch?v=jJJvRpbdhaU","watch?v=M7Ujr2E4vMY","watch?v=vAGhgGaL-ME","watch?v=6OnNwWmmH9U",
  "watch?v=SnnGDCNyopo","watch?v=xuTa-ziHCGo","watch?v=p6Py88fpJpw","watch?v=ga-_6wiCd7Y",
  "watch?v=QB5TSzON_Gg","watch?v=7UxaEGNehig","watch?v=UJYqB7JFua0","watch?v=0bn1pJDseZc",
  "watch?v=cegzpMYIy2Y","watch?v=oQRhv94TJTQ","watch?v=05B6dMI6lvU","watch?v=VOEQ7uSApqU",
  "watch?v=761Lj1_mSgc","watch?v=ZtwxT6WmZeY","watch?v=lshd4zF6zeQ","watch?v=lWwDajFan4E",
  "watch?v=B9RVuffwQNg","watch?v=VaRBz9vl-Qk","watch?v=4u6tmDKNo2k"
  ]
  var rand = songs[Math.floor(Math.random()*songs.length)];
  songurl = "http://youtube.com/" + rand;
  const stream = ytdl(songurl, { filter : 'audioonly' });
  const dispatcher = connection.playStream(stream, streamOptions)
  .on('end', async () => {
    play(connection, streamOptions);
  });
  bot.on("message", async message => {
    if(message.content ===  `${prefix}stop`) {
      console.log("left ");
      message.guild.voiceConnection.disconnect();
      isActive = true;
    }
    if(message.content ===  `${prefix}nani`) {
      message.channel.send(songurl);
    }
  });
}

bot.login(process.env.token);
