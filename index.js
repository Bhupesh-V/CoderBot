// Accuiring necessary modules
const TelegramBot = require('node-telegram-bot-api'); 
//Telegram Bot Token
const token = '773778864:AAGE4wBBkYfIXj2oxn5WWCwJ-lrQ1GrRLoE';
const bot = new TelegramBot(token, {polling: true});

var lang = ['python', 'c++', 'java', 'javascript', 'php', 'rails', 'perl', 'c'];
var bool = false
var learn_language
var did = "674414135"
// '/start' command
bot.onText(/\/start/, (msg) => {

	bot.sendMessage(msg.chat.id, "Welcome, Lets Start Learning How to Code !!", {
	"reply_markup": {
    	"keyboard": [["List Commands"],   ["Contact Developer 👨🏽‍💻"], ["Love this Bot ❤️"]]
    	}
	});

});

bot.onText(/\/lang/, (msg) => {
	bot.sendMessage(msg.chat.id, "Available Languages\n");
	for(i=0 ; i<lang.length;i++){
		bot.sendMessage(msg.chat.id, "✅ <em>" + lang[i].toUpperCase() + "</em>\n" ,{parse_mode : "HTML"});
	}

});

// '/learn' command
bot.onText(/\/learn/, (msg) => {

	bot.sendMessage(msg.chat.id, "Ok, Now tell me the language you want to learn");

	bot.on('message', (msg) => {
    
    
	//Languages CoderBot can teach	
  	
  		for(temp in lang){
  			if(lang[temp] == msg.text.toString().toLowerCase()){
  				bool = true
  				learn_language = lang[temp]
  			}
  		}
  		if (bool==true){
  			//acknowledging the request
  			bot.sendMessage(msg.chat.id, "Got it " + msg.from.first_name + "\nI 'm Sending you some resources");
  			if(learn_language == 'c++' || learn_language == 'cpp'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/cplusplus/\">Tutorials Point</a>",{parse_mode : "HTML"});
  			}
  		}
  		else{
  			  	//Replying with Sorry , if language does not exist in the 'lang' array
  			//bot.sendMessage(msg.chat.id, "Sorry , I do not have resources for that \n Try another Language ");
  		}	

	});

});

bot.on('message', (msg) => {
    
  //anything https://t.me/Bhuups
  var Hi = "hi";
	if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
		bot.sendMessage(msg.chat.id, "Hello  " + msg.from.first_name);
	} 

  var bye = "bye";
	if (msg.text.toString().toLowerCase().includes(bye)) {
		bot.sendMessage(msg.chat.id, "Come back Soon, Bye");
	} 
     
  var robot ="Love this Bot ❤️";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "Thanks 😊👍🏽 ");
    	bot.sendMessage(did, "Someone Loves Your Bot with username @"+ msg.from.username)
	}
  var robot = "Contact Developer 👨🏽‍💻";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "<a href=\"https://t.me/Bhuups\">Bhupesh</a>",{parse_mode : "HTML"});
	}
  var robot = "List Commands";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "1 . '/learn' - For Learning a Language");
	}	
});