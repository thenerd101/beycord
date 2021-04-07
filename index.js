const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Beycord is now online!')
})

client.login(process.env.BEYCORD_TOKEN)