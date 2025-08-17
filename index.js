const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const app = express();

// Railway necesita que tu app escuche un puerto
app.get("/", (req, res) => res.send("Bot activo 🚀"));
app.listen(process.env.PORT || 3000);

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!hola") {
    message.reply("👋 Hola, soy tu bot!");
  }
});

// Token desde variable de entorno en Railway
client.login(process.env.TOKEN);
