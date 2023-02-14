require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  Collection,
  IntentsBitField,
} = require("discord.js");

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.GuildMessageReactions,
      IntentsBitField.Flags.DirectMessageReactions
    ],
});

client.command = new Collection();
["event", "command"].forEach((file) => require(`./handlers/${file}`)(client));

client.login(process.env.TOKEN);
