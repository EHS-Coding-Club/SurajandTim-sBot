const Discord = require('discord.js'); 
const client = new Discord.Client();

const prefix = '-'; 
const fs = require('fs'); 
//const { execute } = require('./commands/ping');

client.commands = new Discord.Collection(); 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {

    const command = require(`./commands/${file}`); 
    client.commands.set(command.name, command); 
    
}// for

client.once('ready', () => {

    console.log('The bot is online'); 

}); // client.once



client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) 

        return;

    const args = message.content.slice(prefix.length).split(/ +/); 
    
    const commannd = args.shift().toLowerCase(); 

    
    if(commannd === 'ping') 

        client.commands.get('ping').execute(client, message, args);

    if(commannd === 'image') 

         client.commands.get('test').execute(client, message, args);

    if(commannd === 'purge')

         client.commands.get('clear').execute(message, args);
    
    if(commannd === 'new')

        client.commands.get('news').execute(client, message, args);

    if(commannd === 'Nekp')

        client.commands.get('neko').execute(client, message, args);

    }); // client.on

client.login('ODA0ODIxNDY1MDM4ODQ4MDcx.YBR6Zg.iUf-dTvARK818KMyFJaLJnLZArw'); // token