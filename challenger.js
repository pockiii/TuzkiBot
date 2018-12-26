var update = function update(message, bot){
  var sender = message.author;
  message.channel.send("Would you like to submit this as a daily/weekly?\n1: yes\n2: no").then(sentMessage => {
    bot.on("message", async message => {
      if (message.content === `1` && sender === message.author){
        sentMessage.delete();
      } else if (message.content === `2`){
        sentmessage.delete();
      } else {
        sentmessage.delete(2000);
      }
    });
  });
}

module.exports.update = update;
