const nhentai = require('nhentai');
const api = new nhentai.API();

module.exports = {

    name: 'nhentai',
    description: 'nhentai scraper',
    execute(client, message, args, Discord) {

        const num = args.join(' ')
    
        if(!num)
            message.reply('send a num please')

        api.fetchDoujin(num).then(doujin => {
            // // Keijun Yahagi wa Koi o Shita. Jou | Light Cruiser Yahagi Fell In Love - First
            // message.channel.send(doujin.titles.pretty);
        
            // https://t.nhentai.net/galleries/1767063/cover.jpg
            message.channel.send(doujin.url);
        
            // // english, translated, kantai collection, teitoku, yahagi, rosapersica, [etc...]
            //message.channel.send(doujin.tags.map(tag => tag.name).join(', '));
        });

    } // execute 

} // module.exports