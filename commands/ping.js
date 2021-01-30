// const { MessageMentions } = require("discord.js");

module.exports = { 

         name: 'ping', 

         description: "ping command", 

         execute(client, message, args) { 

            message.channel.send(`${Date.now() - message.createdTimestamp} - ${Math.round(client.ws.ping)}ms`); 
        
        
     } // executed

 } // module