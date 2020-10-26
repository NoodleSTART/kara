//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js")
const { QUEUE_LIMIT, COLOR } = require("../config.json");
const { oneLineTrim } = require('common-tags');

module.exports = {
  async play(song, message, client, args, songData) {
    const queue = message.client.queue.get(message.guild.id);
let embed = new MessageEmbed()
.setColor(COLOR);

    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
      embed.setAuthor("MUSIC QUEUE IS ENDED NOW :/")
      return queue.textChannel
        .send(embed)
        .catch(console.error);
    }

    try {
      var stream = await ytdlDiscord(song.url, {
        quality: 'lowest',
        filter: 'audioonly',
        encoderArgs: ['-af', 'equalizer=f=70:width_type=h:width=100:g=15,bass=g=7,dynaudnorm=f=200']
        })
      var streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT");
      } else {
        console.error(error);
      }
    }
   
    const dispatcher = queue.connection
      .play(stream, { type: streamType })
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);
  
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME

let totalSeconds = (song.duration);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
    
    
embed.setAuthor("PLAYING SONG", message.client.user.displayAvatarURL())
    .setThumbnail(message.client.user.displayAvatarURL())
    .setDescription(`**[${song.title}](${song.url})**`)
    .addField("DURATION", `${minutes}:${seconds}`, true)
    .addField("CHANNEL", song.channel , true)
    .setImage(song.thumbnail)
    .setTimestamp()
    
    queue.textChannel
      .send(embed)
      .catch(err => message.channel.send("UNABLE TO PLAY SONG"));
  }
};
