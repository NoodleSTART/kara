const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN , prefix , ServerID } = require("./config.json");
const config = require("./config.json")
const COLOR = require("./config.json")
const db = require("quick.db");

//CLIENT EVENTS
client.on("ready", async () => {
  console.log('Ready to play song | Bot created by CTK WARRIOR')
  client.user.setPresence({ activity: { name: `k!help | ${client.guilds.cache.size} server`, type:'LISTENING' }, status: 'online' })
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = prefix
client.queue = new Map();
client.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(prefix)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(prefix.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args)
    //COMMAND LOGS
    console.log(`${message.guild.name}: ${message.author.tag} Used ${client.commands.get(command).name} in #${message.channel.name}`)
    } catch (err) { //IF IT CATCH ERROR
      console.log(err)
      message.reply("I am getting error on using this command")
    }
    
  }
});


//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(TOKEN)
