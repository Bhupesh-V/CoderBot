const TelegramBot = require('node-telegram-bot-api'); 
const token = '773778864:AAGE4wBBkYfIXj2oxn5WWCwJ-lrQ1GrRLoE';
const bot = new TelegramBot(token, {polling: true});
    
bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome, Lets Start Learning How to Code !!", {
"reply_markup": {
    "keyboard": [["Start Learning", "List Commands"],   ["Keyboard"], ["I'm robot"]]
    }
});

});

bot.onText(/\/learn/, (msg) => {

bot.sendMessage(msg.chat.id, "Learn Command");

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
  var cpp = "C++"
  	if (msg.text.indexOf(cpp) === 0) {
  		bot.sendMessage(msg.chat.id, "Ok Lets Learn C++, I'm Sending you some Resources");
  	}
  var python = "Python"
  	if (msg.text.indexOf(python) === 0) {
  		bot.sendMessage(msg.chat.id, "Ok Lets Learn Python, I'm Sending you some Resources");
  	}
  var java = "java"
  	if (msg.text.indexOf(java) === 0) {
  		bot.sendMessage(msg.chat.id, "Ok Lets Learn Java, I'm Sending you some Resources");
  	}
  var jsme = "javascript"
  	if (msg.text.indexOf(jsme) === 0) {
  		bot.sendMessage(msg.chat.id, "Ok Lets Learn JavaScript, I'm Sending you some Resources");
  	}				
});