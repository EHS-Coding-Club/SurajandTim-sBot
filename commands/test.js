var scrap = require('images-scraper');
//const { execute } = require('./ping');

const google = new scrap ({
    puppeteer: {
        headless: true

    },
});

module.exports = {

    name: 'test',
    description: 'nigger',
    async execute(client, message, args) {

        const image_q = args.join(' ');
        if(!image_q) 

            return message.channel.send('nigger');

        const results = await google.scrape(image_q, 1);
        message.channel.send(results[0].url);

    }
    
}

