const Discord = require('discord.js')
const { prefix } = require('./config.json');
const client = new Discord.Client()
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const Eris = require("eris-additions")(require("eris"))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name || command.help.name, command);
}

//Eris Bot Command Handler
bot.on("messageCreate", (msg) => {
    if(msg.content.startsWith(prefix) || message.author.bot) {
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		if (bot.commands.has(command)) return;
	try {
		client.commands.get(command).run(client, message, args, prefix, {}, db);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
    }
});

//login
var bot = new Eris("BOT_TOKEN");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.connect(process.env.TOKEN_DJS)
