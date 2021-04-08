const Discord = require('discord.js')
const { prefix } = require('./config.json');
const client = new Discord.Client()
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name || command.help.name, command);
}
//Command Handler
var db = {}

client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).run(client, message, args, prefix, {}, db);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
//Login
client.on('ready', () => {
    console.log('Beycord is now online!')
})

client.login(process.env.TOKEN_DJS)
