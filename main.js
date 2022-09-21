console.log("Discord Scraper");

const token = process.env.DISCORD_TOKEN;

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
] });

client.once('ready', c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', message => {
  console.log({ message });
});

client.login(token);
