var server=require('./SERVER');
global.ip='https://botterino.herokuapp.com/';
global.ssIp="https://staterinoserverino.herokuapp.com";


var TelegramBot = require('node-telegram-bot-api');
var answer=require('answer');
answer.getStick(sendStickerByBot);
answer.getMess(sendMessageByBot);
answer.getPhoto(sendPhotoByBot);
answer.loadCom();
var token = '142893106:AAE9SE9xTcmXtS0QEOvzoMrrzcqAT-8H_HA';
/*var botOptions = {
    polling:true  
};
var bot = new TelegramBot(token, botOptions);
*/

var port = process.env.PORT||3000;
var host = "https://botterino.herokuapp.com";
var domain =host+"/" + token;

var bot = new TelegramBot(token/*, {webHook: {port: port, host: host}}*/);
global.bot=bot;
console.log(domain);
bot.setWebHook(domain,token);
bot.getMe().then(function(me) {
    console.log('Hello! My name is %s!', me.first_name);
    console.log('AMA WEBHOOK BOT');
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});

bot.on('text', function(msg) {
   // console.log(msg);
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
    answer.ans(messageChatId,messageText,messageDate,messageUsr);
});
bot.on('sticker', function(msg) {
    var messageChatId = msg.chat.id;
    var messageStickerId = msg.sticker.file_id;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
    sendStickerByBot(messageChatId,messageStickerId);
});

function sendMessageByBot(aChatId, aMessage,opts) {
    opts=opts|| { caption: 'I\'m a cute bot!' };
    //console.log(opts);
    if(aMessage)
    bot.sendMessage(aChatId, aMessage,opts);
}
function sendStickerByBot(aChatId, aStickerId) {
    bot.sendSticker(aChatId, aStickerId, { caption: 'I\'m a cute bot!' });
}
function sendPhotoByBot(aChatId,photo){
    bot.sendPhoto(aChatId, photo, { caption: 'Image:' });
}