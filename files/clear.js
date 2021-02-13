module.exports = {

    name: "clear",
    description: "purges messages",
    async execute(client, message, args, Discord) { // awaits a function 

        if(message.member.roles.cache.some(r => r.name === "Board Members")) {
            if(!args[0]) // if there is no number given
                return message.reply('enter an amount of messages you want to clear');

            if(isNaN(args[0])) // if the number given isnt a number
                return message.reply('enter a real number');

            if(args[0] > 100) // if the number given is more than 100
                return message.reply('over the limit, number must be less than 100');

            if(args[0] < 1) // if the number given is less than 1 
                return message.reply('delete at least 1 message');

           await message.channel.messages.fetch({limit: args[0]}).then(messages => { // fetchs the amount of messages in the channel

                message.channel.bulkDelete(messages) // bulk deletes the messages

            }) // message

        } else
        
            return message.reply('you cannot use this command');

    } // execute

} // module.exports