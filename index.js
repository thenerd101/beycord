const Discord = require('discord.js')
const { prefix } = require('./config.json');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const Eris = require("eris-additions")(require("eris"))
const client = new Eris(process.env.TOKEN_DJS);
client.commands = new Discord.Collection();

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