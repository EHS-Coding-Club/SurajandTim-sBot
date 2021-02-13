var Anime = require('anime-scraper').Anime

module.exports = {

    name: 'anime',
    description: 'anime scraper',
    execute(client, message, args, Discord) {

        const animeQ = args.join(' ');
        
        if(!animeQ)
            return message.reply('please enter a name');

        Anime.search(animeQ).then(function (results) {
            
         results[0].toAnime().then(function (anime) {

                console.log(anime)

            })
        })
              

    } //execute


} // module.exports