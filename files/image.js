var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true,
    },
});
  
module.exports = {

    name: 'image',
    description: 'image scraper',
    async execute(client, message, args, Discord) {

        const imageQ = args.join(' ');
        
        if(!imageQ)
            return message.reply('please enter a name');

        const imageR = await google.scrape(imageQ, 1);
        message.channel.send(imageR[0].url);

    } //execute


} // module.exports