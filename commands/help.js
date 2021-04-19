const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, player, db) => {
  let startembed = new Discord.MessageEmbed()
  .setTitle('Help')
  .setDescription('Below is the list of commands you can use.')
  .setColor("#7f7fff")
  .addFields(
    { name: ';approvebb', value: 'Approve a Buddy Bey. AUTHORIZED ACCESS ONLY' },
    { name: ';attach', value: 'Attach an item to a Bey.' },
    { name: ';balance', value: 'Shows your currencies.' },
    { name: ';battle', value: 'Battle people...obviosly.' },
    { name: ';beypedia', value: 'Flip the legendary Beypedia and get information about Beys.' },
    { name: ';boosters', value: 'List all active boosters on you.' },
    { name: ';claim', value: 'Claim the most recent spawned Bey.' },
    { name: ';clear', value: 'Clear your duplicated Beys. Leaving the highest leveled, starreds, Buddy Beys and your starter, level 100s, blacks and exclusives behind.' },
    { name: ';current', value: 'Shows your current equipped bey.' },
    { name: ';debug', value: 'Debugs a Bey to find bugs and potentially fixes it.' },
    { name: ';declinebb', value: 'Decline a Buddy Bey. AUTHORIZED ACCESS ONLY' },
    { name: ';detach', value: 'Detach an item from a Bey.' },
    { name: ';equip', value: 'Equip a bey from your inventory.' },
    { name: ';giveaways', value: 'Host, enter and view giveaways!' },
    { name: ';info', value: 'See information about a specific bey.' },
    { name: ';inventory', value: `Show someone's inventory.` },
    { name: ';iteminventory', value: 'View your inventory of items' },
    { name: ';launcher', value: 'Equip, unequip and view your launchers' },
    { name: ';part', value: `Check for a Bey part's information.` },
    { name: ';partinventory', value: 'View what Bey parts you have in your inventory.' },
    { name: ';pay', value: 'Pay someone with Valtz.' },
    { name: ';ping', value: 'Shows how fast the bot is working.' },
    { name: ';prefix', value: 'View the prefix' },
    { name: ';purchase', value: 'Purches...kinda obvious tbh lol' },
    { name: ';quests', value: 'Complete quests and earn rewards!' },
    { name: ';rankup', value: 'Rank up and receive rewards. You need 100 wins to rank up.' },
    { name: ';redirect', value: 'Redirect Beycord to a different channel.' },
    { name: ';resetstates', value: 'Reset your states data in case you are stuck in a battle or prompt.' },
    { name: ';search', value: 'Search for a Bey using simple queries.' },
    { name: ';setprefix', value: 'Change the prefix.' },
    { name: ';settings', value: 'mgl idk' },
    { name: ';shard', value: 'Displays the ID of the shard that the server belongs to.' },
    { name: ';shop', value: 'Shop for beys!' },
    { name: ';sort', value: 'Sort your inventory to find Beys faster.' },
    { name: ';star', value: 'Star or unstar a Bey.' },
    { name: ';stars', value: 'View all of the starred Beys.' },
    { name: ';start', value: 'Start the game.' },
    { name: ';switch', value: `Changes the Bey's spin direction. (if possible).` },
    { name: ';trade', value: 'Initiate a trade for Beys with someone.' },
    { name: ';train', value: `It's in its name.` },
    { name: ';transactionhistories', value: 'Check your trade and payment history.' },
    { name: ';upgrade', value: `Upgrades your equipped Bey to it's next generation.` },
    { name: ';use', value: 'Use an item.' },
    { name: ';whitemarket', value: 'Sell or buy Beys from the White Market.' }
)
  .setTimestamp();
  message.channel.createMessage({embed:startembed});
}

module.exports.help = {
  name: "help",
  aliases: ["begin"],
  desc: "Start the game.",
  usage: "start <referrer's user ID (optional)> - Begin the game."
}