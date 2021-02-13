module.exports = {

    name: 'help',
    description: 'makes a help command',
    execute(client, message, args, Discord) {

            const embed = new Discord.MessageEmbed() // makes a embed
            .setColor('#FF5896') // sets the color
            .setTitle('help') // gives it a title
            .setURL('https://www.cameronsworld.net/') // gives it a url
            .setDescription('This is a embed for bot commands') // gives it a description
            .addFields( // setting how the embed looks

                {name: '!ping', value: '(for admins only) sends the bots ping'}, // placing the commands
                {name: '!embed', value: 'sends a list of commands'},
                {name: '!clear', value: '(for admins only) purges messages 1-99'},
                {name: '!image', value: 'sends a image when given a name'},
                {name: '!news', value: 'sends a news article when given a reference'},
                {name: '!anime', value: 'sends an anime info to the console'},
                {name: '!mal', value: 'search what you want from my anime list'},
                {name: '!nhentai', value: 'finds the doujin'},
                {name: '!waifu', value: 'finds a waifu'}
                // add more later

            ) // .addFields

            .setImage('https://media.discordapp.net/attachments/706686374840893441/809159861744435230/image0.jpg')
            .setFooter('make sure to have fun!')

            message.channel.send(embed);

    } // execute


} // module.exports