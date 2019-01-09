const Discord = require('discord.js');
const client = new Discord.Client();


// playing
client.on('ready', () => {                           
});

client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;/// Mal , Codes
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  } /// Mal , Codes
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")/// Mal , Codes
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) { /// Mal , Codes 
  if(profile[message.author.id].lastDaily != moment().format('day')) { /// Mal , Codes 
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
 
 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1); /// Mal , Codes 
let sender = message.author
if(message.content.startsWith(prefix + 'trRans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`); /// Mal , Codes 
         return;
           }
        // We should also make sure that args[0] is a number /// Mal , Codes 
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first(); /// Mal , Codes 
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200; /// Mal , Codes
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200; /// Mal , Codes
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username /// Mal , Codes
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
  
      }); /// Mal , Codes 
  
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={ /// Mal , Codes
              points: 0,
              level: 1 /// Mal , Codes 
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1); /// Mal , Codes
          if(profile[message.author.id].points > 100) { 
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})  /// Mal , Codes 
      }) /// Mal , Codes 
     

client.login(process.env.BOT_TOKEN);
