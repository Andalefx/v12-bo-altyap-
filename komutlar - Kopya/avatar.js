const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let user = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author
message.lineReply(`**${user.tag}** ${user.displayAvatarURL({ dynamic: true, size: 4096 })}`)
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['avatar'],
    permLevel : 0
}
 
exports.help = {
    name : 'avatar',
    description : '',
    usage : 'ping'
}
