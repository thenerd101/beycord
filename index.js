const Discord = require('discord.js')
const { prefix } = require('./config.json');
const fs = require('fs');
const Eris = require("eris-additions")(require("eris"));
const client = new Eris(process.env.TOKEN_DJS);
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();
//this thing
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name || command.help.name, command);
}
//Eris Bot Command Handler
var db = {};
client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	try {
		client.commands.get(command).run(client, message, args, prefix, {}, db);
	} catch (error) {
		console.error(error);
		message.reply('Something happened while trying to run this command :/');
	}
});
//Login
client.on('ready', () => {
	console.log('Beycord is online!');
});
client.connect()
