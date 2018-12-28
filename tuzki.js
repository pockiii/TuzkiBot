var update = function update(message, bot){
    message.channel.send(`${message.author}', {
      file: 'https://media1.tenor.com/images/0ca7c15a15aa1a0a57fb0c482a2c220f/tenor.gif'
    });
  });
}

module.exports.update = update;
