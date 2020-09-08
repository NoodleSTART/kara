const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")

//CLIENT EVENTS
client.on("ready", () => {
  console.log('Ready to play song | Bot created by CTK WARRIOR')
  client.user.setActivity("k!help | Musix")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
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
  
  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
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
  
    if (message.content === "kara") {
    message.channel.send("hey bung assisten KARA anda di sini");
  }

  if (message.content === "help") {
    message.channel.send("ada apa bung ?");
  }

  if (message.content === "anjay") {
    message.channel.send(
      "jangan lakukan itu bung atau kamu di penjara 5 tahun bung"
    );
  }

  if (message.content === "aku cinta kamu") {
    message.channel.send("skip bucin lupa temen");
  }

  if (message.content === "Anjay") {
    message.channel.send(
      "jangan lakukan itu bung atau kamu di penjara 5 tahun bung"
    );
  }

  if (message.content === "noob") {
    message.channel.send("jangan panggil aku Noob paman");
  }

  if (message.content === "Siapa kamu") {
    message.channel.send(
      "mahluk yang di ciptakan tuhan untuk menemani masa jomblo mu"
    );
  }

  if (message.content === "jomblo") {
    message.channel.send("aku tidak jomblo bung , ada kamu di sisiku");
  }

  if (message.content === "jalan yuk") {
    message.channel.send("gak ah PMS");
  }

  if (message.content === "gay") {
    message.channel.send(
      "aku suka kamu maukah kita hidup bersama dalam ikatan ini"
    );
  }

  if (message.content === "capek") {
    message.channel.send("sini bang aku pijitin");
  }

  if (message.content === "jijik") {
    message.channel.send(
      "gak usah malu malu bang gratis lo boleh keluar banyak "
    );
  }

  if (message.content === "kita putus") {
    message.channel.send("jangan lah bang , aku lagi ngandung anak kita");
  }

  if (message.content === "info") {
    message.channel.send(
      "bot ini di ciptakan oleh NoodleSTART , ASLI guys ada badaknya ,halal !! mama tau sendiri"
    );
  }

  if (message.content === "mastin") {
    message.channel.send("GOooooooooooooooooooOOOOOoooooodd !!!!");
  }

  if (message.content === "sendi sehat semangat goes ya") {
    message.channel.send("amin !!!");
  }

  if (message.content === "cintai usus mu") {
    message.channel.send("Minum Baygon tiap pagi");
  }

  if (message.content === "bacot lu") {
    message.channel.send(
      "jahat , kalean jahat , dlu kita perna besama sekarang kamu marah dasar semua HOUMAN sama saja"
    );
  }

  if (message.content === "QnA") {
    message.channel.send("Kapan Nikah ?");
  }

  if (message.content === "gelud kita") {
    message.channel.send("Yok gas share loc kalo berani,AKu samperin nih");
  }
  
  
});




//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(TOKEN)
