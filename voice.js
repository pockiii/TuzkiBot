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
    if(message.content ===  `${prefix}yamero`) {
      console.log("left ");
      message.guild.voiceConnection.disconnect();
      isActive = true;
    }
    if(message.content ===  `${prefix}nani`) {
      message.channel.send(songurl);
    }
  });
}
