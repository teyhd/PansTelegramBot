const adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
let Wowza = require('./wowza.js');

let wowza = new Wowza({
	wowzaAdress: '77.232.186.22',   // default value is 'localhost'
	streamFile: 'ipCamera.stream', // default is 'myStream.stream'
	application: 'obs1',         // default is 'live'
	appIstance: '_definst_',       // default is '_definst_'
	mediaCasterType: 'rtp'         // default is 'rtp'
});
wowza.getStreamConfiguration()
.then(response => console.log(response))
.catch(errorMsg => console.log(errorMsg));






/*

const PORT = process.env.PORT || 3334;
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.LEGACY_TOKEN;
const bot = new TelegramBot(token, {polling: true});
app.listen(PORT, ()=>{
    console.log('Телеграм запущен порт:', PORT)
 })

app.get('/',async (req,res)=>{
    if (req.query.msg!=undefined) {
        let number = adminChatId;
        if (req.query.num!=undefined) {
            number = req.query.num;
        }
        res.send('SENDING')
        bot.sendMessage(`${number}`, req.query.msg);
    } else{
        res.send('NO: ' +req.query)
    }
})
//kode
app.post('/',async (req,res)=>{
    //console.log(req.body);
    console.log(req.headers);
    let number = adminChatId;
   // bot.sendMessage(`${number}`, req.body);
    for (key in req.headers) {
        bot.sendMessage(`${number}`, `${key}:${req.headers[key]}`);
    }


})


bot.sendMessage(process.env.LEGACY_ADMIN_CHAT_ID, "Телеграм бот - запущен");

http://localhost:3334?msg=hi&num=adminChatId


// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
   console.dir(msg);
   bot.sendMessage(process.env.LEGACY_ADMIN_CHAT_ID, `${msg.chat.id} написал сообщение\n ${msg.text}`);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Функция живых ответов - в разработке!');
});

 // sendDice()
process.on('uncaughtException', (err) => {
  console.log('Глобальный косяк приложения!!! ', err.stack);
}); //Если все пошло по пизде, спасет ситуацию
*/
