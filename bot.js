// Import the discord.js module
const Discord = require('discord.js');
const economy = require('discord-eco');
const fs = require("fs");
// Create an instance of a Discord client
const client = new Discord.Client();
const token = 'NDYyNzkxOTc1NDkwNTUxODA4.DhnAKw.AkURR8jb6MKwsQDybtQ7zKTdED0';
let stats = JSON.parse(fs.readFileSync("stats.json", "utf8"));
// Quick simulation for gatcha
client.on('ready', () => {
	var  i1 =0 , i2=0, i3=0, i4=0, i5=0;
	for ( var i = 0; i < 1000; i++) { 
		var starrandom = Math.floor(Math.random() * 99);
		if(starrandom >= 0 && starrandom <=7) i5++;
		if(starrandom >= 7 && starrandom <=20) i4++;
		if(starrandom >= 43 && starrandom <=70) i3++;
		if(starrandom >= 43 && starrandom <=70) i2++;
		if(starrandom >= 71 && starrandom <=99) i1++;
	}
	console.log('1 stars *' + i1);
	console.log('2 stars *' +i2);
	console.log('3 stars *' +i3);
	console.log('4 stars *' +i4);
	console.log('5 stars *' +i5);
	console.log('I am ready!☆☆☆☆☆');
});

////////////// --------- number of possiblities
var star1pics = 95;
var star2pics = 132;
var star3pics = 141;
var star4pics = 137;
var star5pics = 132;

client.on('message', message => 
{
	//Automatically disregard capitalization from messages sent.
	let msg = message.content.toUpperCase();

	
///////////////////////////////////////////////////////////////////////////////////////////////////////
	//INIT new player into database
	var  star1 =0 , star2=0, star3=0, star4=0, star5=0, rolls=0, pityrate=0;
	  // if the points don"t exist, init to 0;
	if (!stats[message.author.id]) stats[message.author.id] = {
		rolls: 0,
		star1: 0,
		star2: 0,
		star3: 0,
		star4: 0,
		star5: 0,
		pityrate: 0
	};
////////////////////////---- ECONOMY ------///////////////////////////////////////////////////////
	if (msg.substring(0, 3) == 'ADD' && msg.substring(3, 4) == ' ')
	{
		var args = message.content.slice().split(" ");
		//console.log(message.author);
		//if (!message.member.roles.find("Administrator", modRole)){
		//	message.channel.send('**You need admin role!');
		//	return;
		//}
		if (!args[1]){
			message.channel.send('You need to define an amount');
			return;
		}
		if (isNaN(args[1])){
			message.channel.send('You need to define an number');
			return;
		}
		
		let defineduser = '';
		if(!args[2]){
			defineduser = message.author.id;
		}
		else {
			try{
			let firstMentioned = message.mentions.users.first();
			defineduser = firstMentioned.id;
			}
			catch(err){
				console.log('id err');
				return;
			}
		}
		
		economy.updateBalance(defineduser, args[1]).then((i) => {
			message.channel.send(`**User defined had ${args[1]} added to their account.`)
		});
	
	}
		
	if( msg == 'BALANCE' )
	{
		economy.fetchBalance(message.author.id).then((i) => {
			const embed = new Discord.RichEmbed()
				.setDescription(`**${message.guild.name} Bank**`)
				.addField('Account Holder', message.author.username, true)
				.addField('Account Balance', i.money, true)
			message.channel.send({embed});
	})
	}	
	
	if (msg == 'GATCHA STATS'){
		message.channel.send( message.author.username +' you have rolled, \nTotalRolls: '+ stats[message.author.id].rolls+ '\n☆☆☆☆☆: '+ stats[message.author.id].star5+ '\n☆☆☆☆: '+ stats[message.author.id].star4);
		message.channel.send( '☆☆☆: '+ stats[message.author.id].star3+'\n☆☆: '+ stats[message.author.id].star2+'\n☆: '+ stats[message.author.id].star1);
	}
	if (msg == 'ROLL') 
	{
		economy.updateBalance(message.author.id, -10).then((i) => { 
            message.channel.send(`**You paid for roll -10!**\n** ${message.author.username} New Balance:** ${i.money}`);
        })
		var starrandom = Math.floor(Math.random() * 99);
		stats[message.author.id].rolls++;
		starrandom = starrandom - stats[message.author.id].pityrate;
		if (starrandom > 69 && starrandom <=99)
		{
			var random1 = Math.floor(Math.random() * star1pics);
			stats[message.author.id].star1++;
			message.channel.send
			(
				message.author.username +" you got\n 1 Star!", 
				{file: '1/'+ random1 +'.png'}	
			);
			stats[message.author.id].pityrate++;
			message.channel.send("Your pity rate is now: " + stats[message.author.id].pityrate + '% + 7% Base rate!');
		}
		if (starrandom > 41 && starrandom <=69)
		{
			var random2 = Math.floor(Math.random() * star2pics);
			stats[message.author.id].star2++;
			message.channel.send
			(
				message.author.username +" you got\n 2 Star", 
				{file: '2/'+ random2 +'.png'}	
			);
			stats[message.author.id].pityrate++;
			message.channel.send("Your pity rate is now: " + stats[message.author.id].pityrate + '% + 7% Base rate!');
		}
		if (starrandom > 20 && starrandom <=41)
		{
			var random3 = Math.floor(Math.random() * star3pics);
			stats[message.author.id].star3++;
			message.channel.send
			(
				message.author.username +" you got\n 3 Star", 
				{file: '3/'+ random3 +'.png'}	
			);
			stats[message.author.id].pityrate++;
			message.channel.send("Your pity rate is now: " + stats[message.author.id].pityrate + '% + 7% Base rate!');
		}
		if (starrandom > 6 && starrandom <=20)
		{
			var random4 = Math.floor(Math.random() * star4pics);
			stats[message.author.id].star4++;
			message.channel.send
			(
				message.author.username +" you got\n 4 Star", 
				{file: '4/'+ random4 +'.png'}	
			);
			stats[message.author.id].pityrate++;
			message.channel.send("Your pity rate is now: " + stats[message.author.id].pityrate + '% + 7% Base rate!');
		}
		if (starrandom <=6)
		{
			var random5 = Math.floor(Math.random() * star5pics);
			stats[message.author.id].star5++;
			message.channel.send
			(
				message.author.username +" you got\n 5 Stars", 
				{file: 'waifus/5/'+ random5 +'.png'}	
			);
			stats[message.author.id].pityrate = 0;
			message.channel.send("Your pity rate is now reset!: " + stats[message.author.id].pityrate + '%');
		}
		//Write new infomation into database
		fs.writeFile("stats.json", JSON.stringify(stats), (err) => {
		if (err) console.error(err)
	});
	}
	
	//////////////////////////////////////////////////////////////////
	/*
	if (msg === 'COMMAND HERE') 
	{
		message.channel.send
		(
			"", 
			{
			file: "FILEHERE.png" 
			}
		);
	}
	*/
	
///////////////////////////////////////////////// Emojis
	if (msg === 'EMOJI HELP') {
		message.channel.send
		(
		" surprise\n joy\n nerd\n smirk\n blush\n thinking\n "
		);
	}

	if (msg === 'SURPRISE') {
		message.channel.send
		("",{file: "emoji/surprise.jpg"});
	}
	if (msg === 'SMIRK') {
		message.channel.send
		("",{file: "emoji/smirk.jpg"});
	}
	if (msg === 'JOY') {
		message.channel.send
		("", {file: "emoji/joy.jpg"});
	}
	if (msg === 'BLUSH') {
		message.channel.send
		("",{file: "emoji/blush.jpg"});
	}
	if (msg === 'THINKING') {
		message.channel.send
		("",{file: "emoji/thinking.jpg"});
	}
	
//////////////////// END
});

// Log our bot in
client.login(token);