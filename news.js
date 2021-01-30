var googleNewsScraper = require('google-news-scraper')


module.exports = {
    name: 'news',
    description: 'medium Chest is the best',

    async execute(client, message, args) {
        
        const image_q = args.join(' ');

        if(!image_q) 

            return message.channel.send('nigger');

    
        const articles = await googleNewsScraper({
            searchTerm: image_q,
            prettyURLs: false,
            timeframe: "5d",
            puppeteerArgs: []
        })

        message.channel.send(articles[0].link);
        // message.channel.send(articles[Math.floor(Math.random())].link);
    }
}