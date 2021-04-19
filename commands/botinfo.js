const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, player, db) => {
  let startembed = new Discord.MessageEmbed()
  .setTitle('Information')
  .setDescription('Information about Beycord')
  .setColor("#7f7fff")
  .addFields(
    { name: 'Author of Beycord', value: 'SunSOG/CorruptX', inline:true},
    { name: 'Version of Beycord', value: 'Beycord V2.0', inline:true},
    { name: 'Server Type', value: 'N/A (as of 4/19/21)', inline:true}
)
  .setTimestamp()
  .setFooter('Thank you to StarDust for making Beycord possible in the early days.');
  message.channel.createMessage({embed:startembed});
}

module.exports.help = {
  name: "botinfo",
  desc: "Information about the bot."
}