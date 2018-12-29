const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.usernname} is online!`);
  bot.user.setActivity("emotes");
});

var isActive = true;

bot.on("message", async message => {
  if(message.author.bot) return;
  let prefix = botconfig.prefix;
  let cmd = message.content.toLowerCase();

  if(cmd === `${prefix}test`){
    var url = '';
    for(var i = 1; i <= 88; i++){
      if(i <= 9) {
        url = 'http://yoursmiles.org/ksmile/tuzki/k540' + i + '.gif';
      } else {
        url = 'http://yoursmiles.org/ksmile/tuzki/k54' + i + '.gif';
      }
      message.channel.send(``, {
        file: url
      });
    }
  }
  if(message.content ===  `${prefix}help`) {
    message.channel.send("Help");
  }


});

bot.login(botconfig.token);
