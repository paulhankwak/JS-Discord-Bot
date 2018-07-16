var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

var chickysaying = [
	"ye unless you're doing stuff atm, can run after but I gotta fit in another sell after chicky too",
	"Still in bed and gotta run with chicky x,x",
	"oh uhg running pub atm and need to sell witrh chicky after before he passes out",
	"O i gotta run three commie raids and run with chicky",
	"running 4/6th raid, gotta run chicky first",
	"I'll probably run with chicky after this and then we can run if you want andrew",
	"gonna just finish eating, chicky needs to run five raids atm so we can fit ours in the meanwhile shortly if you want",
	"o wait I didn't run with chicky yet",
	"if he can run now AI can tell chicky just like 15min",
	"ran our last raid with chicky, my bm is free now :sob:",
	"lemme know if you wnana run; gotta run with chicky in 50minish-ish",
]

var damiesayings = [
	"DAMIEBUNS"
]

var sleepsaying = [
	"I sleep max like probably ten hours",
	"I am going back to sleep now",
	"Zero hours sleep again",
	"BETTER GO SLEEP before my sleep randomly dies again",
	"omg upset stomach can't sleep yet :coffin:",
	"Almost didn't sleep again too me like at least two hours",
	"alright itme to like sleep NIGHTNIGHT",
	"i got very unknown and very bad sleep again rofl",
	"Cannot sleep for no reason like always",
	"it took me like two three hours to sleep for no reason and then random heavy 15min shower woke me at the end rofl",
	"probably ded today just lost too much sleep ROFL",
	"Ded i think i missed sleep train",
	"sleep is too powerful men",
	"my only pleasure comes from the feeling I am getting better with sleeps",
	"lets go sleep",
	"too late almost time for sleep :ghost:",
	"Omg there's birds chirping time to sleep",
	"Hihi time for sleep",
	"wtf itme to sleep",
	"but I gotta go sleep like really soon x_x",
]

bot.on('message', function (user, userID, channelID, message, evt) 
{
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
		var eat = args[1];
       
        args = args.splice(1);
        switch(cmd) 
			{
			case 'help':
                bot.sendMessage
				({
                    to: channelID,
                    message: '!nou \n !linami\n !oliver\n !goodboy\n !qtpie \n !sleep\n !csgo\n !old\n !wanna __\n !work\n !albert\n !luv\n !hate\n !chicky\n' 
                });
				break;
			case 'sleep':
				var sleepran = Math.floor(Math.random() * sleepsaying.length); 
				bot.sendMessage
				({
                    to: channelID,
                    message: sleepsaying[sleepran]
                });
			break;
			case 'albepls':
				bot.sendMessage
				({
                    to: channelID,
                    message: 'I think m.2 ssds are 4x or something faster than sata 600mb/s \nidk how that affects iops and small file processing speed tho \n "what\'s the difference between m.2 and pcie drives" \nthat I got no clu'
                });
				//message.channel.send("My Bot's message", {files: ["https://i.imgur.com/XxxXxXX.jpg"]});
				break;
			case 'albert':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'albe go sleep ok'
                });
				break;
			case 'luv':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'I LUV U'
                });
				break;
			case 'linami':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'linami-chaaaaaan :sob:'
                });
				break;
			case 'wanna':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'i wanna ' + eat + ' u!'
                });
				break;
			case 'csgo':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'and I really absolkutely hate ad strafing\n it\'s not even like quake with more linear movement\njust people randomly stopping and instantly moving again at 100% speed\nana only feels good because of her duality\ncsgo is just the better game\ni dont know'
                });
				break;
			case 'old':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'im old :older_man:'
                });
				break;	
			case 'oliver':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'olipieeeeeee :sob:'
                });
				break;
            case 'nou':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'no u'
                });
				break;
			case 'qtpie':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'hi there qtipies'
                });
				break;
			case 'spikeynou':
                bot.sendMessage
				({
                    to: channelID,
                    message: ':spikey2nou:'
                });
				break;
			case 'work':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'toot tired after work today'
                });
				break;
			case 'goodboy':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'u are all good boys :sadcat:'
                });
				break;
			case 'hate':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'i do not like not cute people!!!'
                });
			break;
            case 'chicky':
				var chickyran = Math.floor(Math.random() * chickysaying.length); 
				bot.sendMessage
				({
                    to: channelID,
                    message: chickysaying[chickyran]
                });
			break;
			}
     }
});