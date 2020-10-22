const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message, args) {
        let StartDate = Date.now();
    const Wait = new MessageEmbed()
      .setColor(COLOR)
      .setDescription(`Please Wait...`);
    message.channel.send(Wait).then(Msg => {
      let EndDate = Date.now();

      const embed = new MessageEmbed()
        .setColor(COLOR)
        .addField("Message Latency", `${Math.floor(StartDate - EndDate)}`, true)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`)
      Msg.delete();
      message.channel.send(embed);
    });
  }
};
