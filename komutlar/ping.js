const Discord = require('discord.js');
exports.run = async(client, message, args) => {
message.channel.send(`${client.ws.ping}`)
message.react("✔️")
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['ping'],
    permLevel : 0
}
 
exports.help = {
    name : 'avatar',
    description : '',
    usage : 'ping'
}
