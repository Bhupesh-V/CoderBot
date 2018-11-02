// Accuiring necessary modules
const TelegramBot = require('node-telegram-bot-api'); 
//Telegram Bot Token
const token = '773778864:AAGE4wBBkYfIXj2oxn5WWCwJ-lrQ1GrRLoE';
const bot = new TelegramBot(token, {polling: true});

//Languages CoderBot can teach	
var lang = ['python', 'c++', 'java', 'javascript', 'php', 'rails', 'perl', 'c', 'swift'];
var bool = false
var learn_language
var did = "674414135"



// '/start' command
bot.onText(/\/start/, (msg) => {

	bot.sendMessage(msg.chat.id, "Welcome, Lets Start Learning to Code !!", {
	"reply_markup": {
    	"keyboard": [["List Commands"], ["Contact Developer 👨🏽‍💻"], ["Love this Bot ❤️"]]
    	}
	});

});

//lang command - gives all availabe languages
bot.onText(/\/lang/, (msg) => {
	bot.sendMessage(msg.chat.id, "Available Languages\n");
	for(i=0 ; i<lang.length;i++){
		bot.sendMessage(msg.chat.id, "✅ <em>" + lang[i].toUpperCase() + "</em>\n" ,{parse_mode : "HTML"});
	}

});

//help command - helps the new user with interacting to bot
bot.onText(/\/help/, (msg) => {
	bot.sendMessage(msg.chat.id, "Help : \n");
	bot.sendMessage(msg.chat.id, "CoderBot helps you learn progrmming\n   Follow the steps below : \n\n\
 Step 1 : type /learn and follow instructions \n Step 2 : type /lang to see all languages\n\
 Step 3 : type /start to start interacting with bot\n Step 4 : type /help to see help ");

});

// '/learn' command
bot.onText(/\/learn/, (msg) => {

	bot.sendMessage(msg.chat.id, "Ok, Now tell me the language you want to learn");

	bot.on('message', (msg) => {
        
  		for(temp in lang){
  			if(lang[temp] == msg.text.toString().toLowerCase()){
  				bool = true
  				learn_language = lang[temp]
  			}
  		}

  		if (bool==true){
  			//acknowledging the request
  			bot.sendMessage(msg.chat.id, "Got it  " + msg.from.first_name + "\nI 'm Sending you some resources");
  			if(learn_language == 'c++' || learn_language == 'cpp'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/cplusplus/\">Tutorials Point</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.sololearn.com/Course/CPlusPlus/\">SoloLearn</a>",{parse_mode : "HTML"});
  			  bot.sendMessage(msg.chat.id, "<a href=\"https://www.youtube.com/watch?v=18c3MTX0PK0&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb\">Youtube</a>",{parse_mode : "HTML"});
          bot.sendMessage(msg.chat.id, "<a href=\"https://www.youtube.com/watch?v=vLnPwxZdW4Y\">Youtube</a>",{parse_mode : "HTML"});
        }
  			if(learn_language == 'python'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.w3schools.com/python/\">W3 Schools</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://developers.google.com/edu/python/\">Google Python Class</a>",{parse_mode : "HTML"});
          bot.sendMessage(msg.chat.id, "<a href=\"https://pythonprogramming.net/python-fundamental-tutorials/\">Python Programming</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'java'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.w3schools.com/java/\">W3 Schools</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19\">Youtube</a>",{parse_mode : "HTML"});
          bot.sendMessage(msg.chat.id, "<a href=\"https://www.youtube.com/watch?v=Hl-zzrqQoSE&list=PLFE2CE09D83EE3E28\">Youtube</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'javascript'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.w3schools.com/js/default.asp\">W3 Schools</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.javascript.com/try\">PluralSight</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.geeksforgeeks.org/javascript-tutorial/\">geeksforgeeks</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'php'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.w3schools.com/php/\">W3 Schools</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.php5-tutorial.com/\">php5-tutorial</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'rails'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/ruby-on-rails/\">Tutorials Point</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://medium.freecodecamp.org/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f?gi=532ea1155e31\">freecodecamp</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'perl'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/perl/\">Tutorials Point</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'c'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/cprogramming/\">Tutorials Point</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.geeksforgeeks.org/c-programming-language/\">geeksforgeeks</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq\">Youtube</a>",{parse_mode : "HTML"});
  			}
  			if(learn_language == 'swift'){
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.tutorialspoint.com/swift/\">Tutorials Point</a>",{parse_mode : "HTML"});
  				bot.sendMessage(msg.chat.id, "<a href=\"https://www.w3schools.in/swift-tutorial/\">w3 schools</a>",{parse_mode : "HTML"});
  			}

  		}
  		else{
  			  	//Replying with Sorry , if language does not exist in the 'lang' array
  			//bot.sendMessage(msg.chat.id, "Sorry , I do not have resources for that \n Try another Language ");
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
      bot.sendMessage(msg.chat.id, "All Commands \n\ 1 : type /learn and follow instructions\n 2 : type /lang to see all languages\n\ 3 : type /start to start interacting with bot\n 4 : type /help to see help ");
	}	
});