const { Client, RichEmbed } = require("discord.js");
const token = process.env.token;
const client = new Client({
    disableEveryone: true
})

var port = process.env.PORT || 5000;

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "NodeJS",
            type: "WATCHING"
        }
    }); 
})

client.on("message", async message => {
    const prefix = "!";

    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Arguments and command variable
    // cmd is the first word in the message, aka the command
    // args is an array of words after the command
    // !say hello I am a bot
    // cmd == say (because the prefix is sliced off)
    // args == ["hello", "I", "am", "a", "bot"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {
        // Send a message
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);	
    }
	
	
	
	if (cmd === "durlax") {
        // Send a message
        const msg = await message.author.send(`Durlax? He is cool guy! UwU`);	
		await message.channel.send(`DMs buddy!`);
    }
	
	if (cmd === "eset") {
        // Send a message
		const msg = await message.author.send(`**ESET** https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);	
    }
	
	if (cmd === "minecraft") {
        // Send a message
        const msg = await message.author.send(`**MINECRAFT**  https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);	
    }
	
	if (cmd === "spotify") {
        // Send a message
        const msg = await message.author.send(`**SPOTIFY**  https://up-to-down.net/27527/`);
		await message.author.send(`https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);	
    }
	
	if (cmd === "hulu") {
        // Send a message
        const msg = await message.author.send(`**HULU**  https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
	
	if (cmd === "nord") {
        // Send a message
        const msg = await message.author.send(`**NORD**  https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
	
	if (cmd === "dominos") {
        // Send a message
        const msg = await message.author.send(`**DOMINOS** https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
	
	if (cmd === "fortnite") {
        // Send a message
        const msg = await message.author.send(`**FORTNITE** https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
	
	if (cmd === "steam") {
        // Send a message
        const msg = await message.author.send(`**STEAM** https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
	
	if (cmd === "uplay") {
        // Send a message
        const msg = await message.author.send(`**UPLAY** https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
	
	if (cmd === "origin") {
        // Send a message
        const msg = await message.author.send(`**ORIGIN** https://up-to-down.net/27527/`);
        await message.channel.send(`Check your DMs !`);		
    }
});


client.login(token).catch(err => console.log(err));
