const client = require('waifu.js')
let api = new client()

module.exports = {

    name: 'waifu',
    descrition: 'sends something',
    async execute(client, message, args, Discord) { 

        message.channel.send(await api.sfw.waifu())

    } // execute 

} // module.exports
