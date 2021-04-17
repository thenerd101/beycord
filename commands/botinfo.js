/*const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, player, db, cmdt) => {
  let now = new Date();
  client.createMessage(message.channel.id, '_ _')
  .then(async msg => {
    let dbnow = new Date();
    let stats = await db.collection("users").findOne({_id: message.author.id});
    let newnow = new Date();
    let dbping = newnow - dbnow;
    let pembed = new Discord.MessageEmbed()
    .setTitle("Pings")
    .setColor("#7f7fff")
    .setDescription(`**Bot Information**`)
    .setTimestamp();
    channel.send(pembed);
  });
}

module.exports.help = {
  name: "botinfo",
  desc: "Information",
  usage: "botinfo - Shows the Shows information about Beycord."
}*/