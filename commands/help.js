const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



module.exports = {
  name: "help",
  description: "Get help bot info",
  execute(client, message, args) {
    
    let yembed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`Invite the bot`, client.user.displayAvatarURL())
    .setDescription(`My name is **${client.user.username}** and there are my invite link`)
    .addField("INVITE BOT", `[Bot invite](http://google.com)`)
 console.log(client.user.presence)
    message.channel.send(yembed)
  }
};