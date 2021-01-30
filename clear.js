module.exports = {

    name: 'clear',
    description: 'clears messa',
    async execute(message, args) {

        if(!args[0])

            return message.reply("please stop niggering me");

        if(isNaN(args[0]))

            return message.reply("nigger level 9000");

        if(args[0] > 100)

            return message.reply("too many messages, cant kill 100 niggers with one bullet");

        if(args[0] < 1)

            return message.reply("at least kill a nigger");

         await message.channel.messages.fetch( {Limit: args[0]}).then(messages =>{
           
            message.channel.bulkDelete(messages);
            
        });
          
            
    }

}