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
  let guild = message.guild.id;

  if(cmd === `${prefix}list`){
    var url = '';
    for(var i = 1; i <= 88; i++){
      if(i <= 9) {
        url = 'http://yoursmiles.org/ksmile/tuzki/k540' + i + '.gif';
      } else {
        url = 'http://yoursmiles.org/ksmile/tuzki/k54' + i + '.gif';
      }
      await message.channel.send(i, {
        file: url
      });
    }
  }
  if(message.content.startsWith(`${prefix}`) && message.content.match(`${prefix}[0-9]|[1-9][0-9]`)) {
    message.delete();
    if(message.content.split(" ")[1] > 88) {
      message.channel.send("Array out of bounds");
    } else {
      foo(message.content.split(" ")[1], ``, message);
    }
  }
  if(message.content ===  `${prefix}status`) {
    message.channel.send("up");
  }

});

function foo(i, str, message) {
  if(i <= 9) {
    url = 'http://yoursmiles.org/ksmile/tuzki/k540' + i + '.gif';
  } else {
    url = 'http://yoursmiles.org/ksmile/tuzki/k54' + i + '.gif';
  }
   message.channel.send(message.mentions.members.first(), {
    file: url
  });
}
bot.login(process.env.token);
