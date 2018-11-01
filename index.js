// Accuiring necessary modules
const TelegramBot = require('node-telegram-bot-api'); 
//Telegram Bot Token
const token = '773778864:AAGE4wBBkYfIXj2oxn5WWCwJ-lrQ1GrRLoE';
const bot = new TelegramBot(token, {polling: true});
    

// '/start' command
bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome, Lets Start Learning How to Code !!", {
"reply_markup": {
    "keyboard": [["Start Learning", "List Commands"],   ["Contact Developer"], ["I'm Bot"]]
    }
});

});

// '/learn' command
bot.onText(/\/learn/, (msg) => {

	bot.sendMessage(msg.chat.id, "Ok, Now tell me the language you want to learn");

	bot.on('message', (msg) => {
    
    var bool = false
    var learn_language
	//Languages CoderBot can teach	
  	var lang = ['python', 'c++', 'java', 'javascript', 'php', 'rails', 'perl', 'c'];
  		for(temp in lang){
  			if(lang[temp] == msg.text.toString().toLowerCase()){
  				bool = true
  				learn_language = lang[temp]
  			}
  		}
  		if (bool==true){
  			//acknowledging the request
  			bot.sendMessage(msg.chat.id, "Got it " + msg.from.first_name + "\nI 'm Sending you some resources");
  			if(learn_language == 'c++'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/cplusplus/\">Tutorials Point</a>",{parse_mode : "HTML"});
  			}
  		}
  		else{
  			  	//Replying with Sorry , if language does not exist in the 'lang' array
  			bot.sendMessage(msg.chat.id, "Sorry , I do not have resources for that \n Try another Language ");
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
     
  var robot ="I'm Bot";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
	}
  var robot = "Start Learning";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "Ok , tell me the Programming Language");
	}
  var robot = "Contact Developer";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "<a href=\"https://t.me/Bhuups\">Bhupesh</a>",{parse_mode : "HTML"});
	}
  var robot = "List Commands";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "1 . '/learn' - For Learning a Language");
	}	
});