module.exports = {

    name: 'ping',
    description: 'sends the ping of this bot',
    execute(client, message, args, Discord) {

        if(message.member.roles.cache.some(r => r.name === "Board Members")) // checks if the user has this role id
           message.channel.send(`${Date.now() - message.createdTimestamp}ms, ${Math.round(client.ws.ping)}ms`); // sends the bots ping
    
        else
            message.channel.send('You cannot use this command');
        
    
    } // execute

} // module.exports