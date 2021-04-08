const Discord = require('discord.js')
const { prefix } = require('./config.json');
const client = new Eris(TOKEN_DJS);
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const Eris = require("eris-additions")(require("eris"))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name || command.help.name, command);
}

//Eris Bot Command Handler
var db = {}
client.on('messageCreate', (msg) => {
	if (msg.content.startsWith(prefix) || message.author.bot) return;
	try {
		client.commands.get(command).run(client, message, args, prefix, {}, db);
	} catch (error) {
		console.error(error);
		message.reply('Something happened while trying to run this command :/');
	}
});
//Login
client.on('ready', () => {
	console.log('Beycord is online!')
})
client.connect()