// Accuiring necessary modules
const TelegramBot = require('node-telegram-bot-api'); 
//Telegram Bot Token
const token = '773778864:AAGE4wBBkYfIXj2oxn5WWCwJ-lrQ1GrRLoE';
const bot = new TelegramBot(token, {polling: true});
    

// '/start' command
bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome, Lets Start Learning How to Code !!", {
"reply_markup": {
    "keyboard": [["Start Learning", "List Commands"],   ["Keyboard"], ["I'm robot"]]
    }
});

});

// '/learn' command
bot.onText(/\/learn/, (msg) => {

	bot.sendMessage(msg.chat.id, "Ok, Now tell me the language you want to learn");

	bot.on('message', (msg) => {
    
	//Languages CoderBot can teach	
  	var lang = ['c++', 'python', 'java', 'javascript', 'php', 'rails', 'perl', 'c'];
  		for(temp in lang){
  			if(temp == msg.text.toString().toLowerCase()){
  				bot.sendMessage(msg.chat.id, "Got it " + msg.from.first_name + "\nI' m sending you some resources");
  			}
  		}	
  	//Replying with Sorry , if language does not exist in the 'lang' array
  		bot.sendMessage(msg.chat.id, "Sorry , I do not have resources for that language");
		bot.sendMessage(msg.chat.id, "Try another Language ");
	});

});

bot.on('message', (msg) => {
    
  //anything
  var Hi = "hi";
	if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
		bot.sendMessage(msg.chat.id, "Hello  " + msg.from.first_name);
	} 

  var bye = "bye";
	if (msg.text.toString().toLowerCase().includes(bye)) {
		bot.sendMessage(msg.chat.id, "Come back Soon, Bye");
	} 
     
  var robot = "I'm robot";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
	}
  var robot = "Start Learning";
	if (msg.text.indexOf(robot) === 0) {
    	bot.sendMessage(msg.chat.id, "Ok , tell me the Programming Language");
	}	
});