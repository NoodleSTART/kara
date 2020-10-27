const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



module.exports = {
  name: "help",
  description: "Get help bot info",
  execute(client, message, args) {
    
    let yembed = new MessageEmbed()
    .setColor(COLOR)
    .setAuthor(`MUSIC KARA`, client.user.displayAvatarURL())
    .setDescription("We, as the creators of the Kara bot, are very grateful for trusting \nthe bot that we have created, this Kara bot is free of charge even in the operation, but if there is damage later, we will be happy to help fix this bot and we will always try our best. \n\n to get started, you can type `k!command` to immediately find out all the commands available in **MUSIC KARA**. \n\n **Information** \nall information about the bot can be found [here](https://top.gg/bot/750178438278545441).\n\n **Add to discord** \nMusic kara can be added to your a server as you like by [using the following link](https://discord.com/api/oauth2/authorize?client_id=750178438278545441&permissions=8&scope=bot).\n\n **support** \n[click here](https://discord.gg/RUsn3Hn) to ask for help and ask if you have any questions for Music kara.")
 console.log(client.user.presence)
    message.channel.send(yembed)
  }
};