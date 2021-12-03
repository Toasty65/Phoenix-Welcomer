require('dotenv').config();
const fs = require("fs");
const { Client, Intents, Collection } = require('discord.js');

// Create a new Discord client
const client = new Client({
    intents: [
        // Here's a list of all available intents. Enable only required ones

        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGES
    ],
});

client.commands = new Collection();

// Call all handlers to register commands and events
fs.readdirSync('./handlers').forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

// Login to the bot
client.login(process.env.TOKEN);