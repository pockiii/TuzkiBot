var tu = [
'https://media1.tenor.com/images/0ca7c15a15aa1a0a57fb0c482a2c220f/tenor.gif',
'https://media1.tenor.com/images/c6470330f1919cee92f015e255356154/tenor.gif',
'https://media1.tenor.com/images/d8706a3e0db7e2f1f8c6b64f248d2564/tenor.gif',
'https://media1.tenor.com/images/32966f868fcc3b631cbdff07ace5876a/tenor.gif',
'https://media1.tenor.com/images/a7b096a686a2a183c32dfa178eddf92a/tenor.gif',
'https://media1.tenor.com/images/b5f6231f2d8f9bdae38d8e3472fc9799/tenor.gif',
'https://media1.tenor.com/images/a5ab0428a1ebb308f48fd7aa6964a0e4/tenor.gif',
'https://media1.tenor.com/images/a7418181cb21349f90014704225a0106/tenor.gif',
'https://media1.tenor.com/images/b74aaa314b8ad326ad85df8b738bf16b/tenor.gif',
//http://yoursmiles.org/k-tuzki.php
]

var update = function update(message, bot){
  if(message.content === `${prefix}1`){
      tu.forEach(function(item, index, array) {
        message.channel.send(``, {
          file: item
        });
      });
    }
  else{
    message.channel.send(`${message.author}`, {
      file: 'https://media1.tenor.com/images/0ca7c15a15aa1a0a57fb0c482a2c220f/tenor.gif'
    });
  }
}

module.exports.update = update;
