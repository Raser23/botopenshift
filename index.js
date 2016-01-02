var http=require('http');

var random=require('random-number14228');

var cool = require('cool-ascii-faces');

var server=http.createServer(function(req,res){
    console.log(req);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>'+random()+ '</h1>');
});
var port=Number(process.env.PORT||3000);
server.listen(port);

var TelegramBot = require('node-telegram-bot-api');
var answer=require('answer');
answer.getStick(sendStickerByBot);
answer.getMess(sendMessageByBot);
answer.getPhoto(sendPhotoByBot);
answer.loadCom();
var token = '115827379:AAFaFtX7j5pFblau-xnP35dcI8VS2Ku6o9I';
var botOptions = {
        http_proxy: {
        host: 'https://botterino.herokuapp.com/',
        port: port
    },
        updates: {
        enabled: true,
        get_interval: 2000
    }
};
var bot = new TelegramBot(token, botOptions);

bot.getMe().then(function(me) {
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});

bot.on('text', function(msg) {
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
    //console.log(aMessage);
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