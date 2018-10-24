var update = function update(message, bot){
  message.channel.send("Would you like to submit this as a daily/weekly?\n1: yes\n2: no").then(sentMessage => {
    bot.on("message", async message => {
      if(message.content === `1` || message.content === `2` ){
        sentMessage.delete();
      }
    });
  });
}

module.exports.update = update;
