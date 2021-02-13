require('dotenv').config();
module.exports = (Discord, client, message) => {

    // prefix....
    const prefix = process.env.PREFIX;
    
      // stops the bot from sending a message if it doesnt start with the prefix or the bot started the command
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;   

    // splits the message so the bot can read the command 
    const args = message.content.slice(prefix.length).split(/ +/);

    //reads as a lower case
    const cmd = args.shift().toLowerCase();

    const cd = client.commands.get(cmd);

    if(cd) 
        cd.execute(client, message, args, Discord);

} // module.exports