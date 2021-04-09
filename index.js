const Discord = require('discord.js');
const Eris = require("eris-additions")(require("eris"));
const fs = require('fs');
const { prefix } = require('./config.json');

const client = new Eris(process.env.TOKEN_DJS);
client.commands = new (Discord.Collection || Map)();
client.beys = new (Discord.Collection || Map)();
client.parts = new (Discord.Collection || Map)();
client.items = new (Discord.Collection || Map)();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name || command.help.name, command);
}

let db = {};

client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	message.reply = content => {
		client.createMessage(message.channel.id, `<@${message.author.id}>, ${content}`);
	}
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if(client.commands.has(command){
		try {
	   		let cmd = client.commands.get(command);
			cmd.run(client, message, args, prefix, {}, db);
		} catch (error) {
			console.error(error);
			message.reply('Something happened while trying to run this command :/');
		}
	}
});

client.on('ready', () => {
	console.log('Beycord is online!');
});

client.connect();
