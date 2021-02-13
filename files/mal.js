const malScraper = require('mal-scraper')


module.exports = {

    name: 'mal',
    description: 'mal scraper',
    execute(client, message, args, Discord) {

         const name = args.join(' ')

         if(!name)
            message.reply('I need a name')

         malScraper.getInfoFromName(name)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))


          

        

    } // execute


} // module.exports