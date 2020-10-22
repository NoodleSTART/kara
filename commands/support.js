const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



module.exports = {
  name: "support",
  description: "Get the support for bot",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`SUPPORT BOT INFO`, client.user.displayAvatarURL())
    .setDescription(`My name is **${client.user.username}** and There are my support info`)
    .addField("LINK",` [discord](https://discord.gg/RUsn3Hn) - [vote me](https://top.gg/bot/750178438278545441/vote) `, true)
    .setTimestamp()
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};
