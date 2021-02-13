const googleNewsScraper = require('google-news-scraper')

module.exports = {

    name: "news",
    description: "scraps google news",
    async execute(client, message, args, Discord) {


        const newQ = args.join(' ');

        if(!newQ)
            return message.reply('please enter a name');
        
    
        const articles = await googleNewsScraper({
            searchTerm: newQ,
            prettyURLs: true,
            timeframe: "5d",
            puppeteerArgs: []
        })

        message.channel.send(articles[0].link);



    } // execute

} // module.exports