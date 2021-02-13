// creating the requirements....
const Discord = require('discord.js'); 
const client = new Discord.Client();
require('dotenv').config();

// holds a collection of cmds
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

// more advanced cmd handler
['cmd_handler', 'event_handler'].forEach(handler => { // loops through the files

    require(`./handlers/${handler}`)(client, Discord);

}) // forEach

// token, starting the bot.............
client.login(process.env.DISCORD_TOKEN);