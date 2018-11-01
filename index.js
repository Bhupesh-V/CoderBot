const TelegramBot = require('node-telegram-bot-api'); 
const token = '773778864:AAGE4wBBkYfIXj2oxn5WWCwJ-lrQ1GrRLoE';
const bot = new TelegramBot(token, {polling: true});
    
bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome, Lets Start Learning How to Code !!");
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["Start Learning", "List Commands"],   ["Keyboard"], ["I'm robot"]]
    }
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
});