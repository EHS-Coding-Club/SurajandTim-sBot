const client = require('nekos.life');
const neko = new client();

module.export = {

    name: 'neko',
    description: 'nigger',

    async execute(client, message, args) {
         
        const input = args.join(' ');

        if(!input) 

            return message.channel.send('nigger');

        switch (input) {

            case "smug":
                message.channel.send(await neko.sfw.hug());       
            break;

         }         
    }
}
