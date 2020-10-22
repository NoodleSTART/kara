const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");
const ms = require("ms")



module.exports = {
  name: "stats",
  description: "Get the detailed information of bot",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`STATS AND INFORMATION`, client.user.displayAvatarURL())
    .setDescription(`My name is **${client.user.username}** and My work is to play Music`)
    .addField("SERVERS", client.guilds.cache.size, true)
    .addField("ID", client.user.id, true)
    .addField("PRESENCE", client.user.presence.activities[0].name, true)
    .addField("UPTIME", ms(client.uptime), true)
    .addField("STATUS", client.user.presence.status, true)
    .addField("TOTAL MEMBERS", client.users.cache.size,true)
    .addField("BOT PLAYING IN", `${client.queue.size} server`, true)
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};
