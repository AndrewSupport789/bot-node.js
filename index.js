const { Client, RichEmbed } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})






function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: '!cmds',
            type: "STREAMING",
            url: "https://www.twitch.tv/itzsmartin"
        }
    });
});

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
	
	
	
	if (cmd === "nord") {
        // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('NordVPN')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/NordVPN', true)
	.addField('ACCOUNT LIST #2', 'https://up-to-down.net/27527/NordVPN2')
	.addField('ACCOUNT LIST #3', 'https://up-to-down.net/27527/NordVPN3', true)
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "eset") {
        // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Eset keys')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('LIST #1', 'https://link-to.net/27527/esetkeys')
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "minecraft") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Minecraft')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://link-to.net/27527/Minecraft001', true)
	.addField('ACCOUNT LIST #2', 'https://link-to.net/27527/Minecraft')
	.addField('ACCOUNT LIST #3', 'https://link-to.net/27527/minecrafts', true)
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }	
	
	if (cmd === "spotify") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Spotify')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/spotify4', true)
	.addField('ACCOUNT LIST #2', 'https://up-to-down.net/27527/spotify3')
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "hulu") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Hulu')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/hulu', true)
	.addField('ACCOUNT LIST #2', 'https://up-to-down.net/27527/hulu2')
	.addField('ACCOUNT LIST #3', 'https://up-to-down.net/27527/Hulu3', true)
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "dominos") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Dominos')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://link-to.net/27527/Dominos')
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "fortnite") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Fortnite')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/fortnite', true)
	.addField('ACCOUNT LIST #2', 'https://up-to-down.net/27527/fortnite2')
	.addField('ACCOUNT LIST #3', 'https://up-to-down.net/27527/fortnite02', true)
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "steam") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Steam')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/Steam', true)
	.addField('ACCOUNT LIST #2', 'https://up-to-down.net/27527/Steam2')
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "uplay") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Uplay')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/uplay', true)
	.addField('ACCOUNT LIST #2', 'https://up-to-down.net/27527/uplay2')
	.addField('ACCOUNT LIST #3', 'https://up-to-down.net/27527/Uplay3', true)
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "origin") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Origin')
	.setURL('http://rabbits-alts.cf')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('==========================================')
	.addField('ACCOUNT LIST #1', 'https://up-to-down.net/27527/Origin', true)
	.addField('ACCOUNT LIST #2', 'https://direct-link.net/27527/Origin3')
	.addField('You need help?', 'https://youtu.be/kJbWiPKP_gg')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Generating....`);
		
		mss.edit(`**Generated check ur DMs!**`);	
    }
	
	if (cmd === "cmds") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Origin')
	.setURL('http://rabbits-gen.club/commands.html')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('visit http://rabbits-gen.club/commands.html for all commands!')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Sending....`);
		
		mss.edit(`**Commands Sent**`);	
    }
	
	if (cmd === "help") {
       // Send a message
        const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Origin')
	.setURL('http://rabbits-gen.club/commands.html')
	.setAuthor('DevilGen generated account for you!', 'https://i.imgur.com/Xjp3oMy.jpg', 'https://rabbits-alts.cf')
	.setThumbnail('https://i.imgur.com/Xjp3oMy.jpg')
	.setDescription('visit http://rabbits-gen.club/commands.html for all commands!')
	.setTimestamp()
	.setFooter('BlackRabbit001#7046');
        await message.author.send(exampleEmbed);
		const mss = await message.channel.send(`Sending....`);
		
		mss.edit(`**Commands Sent**`);	
    }
});

client.login(token).catch(err => console.log(err));
