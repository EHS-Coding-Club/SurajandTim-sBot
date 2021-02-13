const fs = require('fs');

module.exports = (client, Discord) => {

    const cmd_Files = fs.readdirSync('./files/').filter(file => file.endsWith('.js'));

    // loops the folder for the commands to store in the collection 
    for(const file of cmd_Files) {

        const cd = require(`../files/${file}`);

        if(cd.name) 
            client.commands.set(cd.name, cd);

        else 
            continue;

            
    } // for

} // module.exports