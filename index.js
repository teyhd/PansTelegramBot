const PORT = process.env.PORT || 3334;
const express = require('express');
const fs = require('fs-extra');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
if (!token || !adminChatId) throw new Error('Set TELEGRAM_BOT_TOKEN and TELEGRAM_ADMIN_CHAT_ID');
const bot = new TelegramBot(token, {polling: true});
var rp = require('request-promise');

app.listen(PORT, ()=>{
    console.log('Телеграм запущен порт:', PORT)
 })
 bot.sendMessage(process.env.LEGACY_ADMIN_CHAT_ID, "Телеграм бот - запущен");

 app.get('/',async (req,res)=>{
    if (req.query.msg!=undefined && req.query.num!=undefined) {
        res.send('SEND')
        let number = req.query.num;
        let message = req.query.msg;
        bot.sendMessage(`${number}`, message);
        console.log(number);
        console.log(message);

    } else{
        res.send('NO' +req.query)
    }
})
app.get('/err',async (req,res)=>{
  if (req.query.msg!=undefined && req.query.num!=undefined) {
      res.send('SEND')
      let number = req.query.num;
      let message = req.query.msg;
      let pic = req.query.pic;
      bot.sendMessage(`${number}`, message,pic);
  } else{
      res.send('NO' +req.query)
  }
})

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
   console.dir(msg);
   if (msg.chat.id!=adminChatId){
    bot.sendMessage(process.env.LEGACY_ADMIN_CHAT_ID, `${msg.chat.id} написал сообщение\n ${msg.text}`);
   }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Функция живых ответов - в разработке!');
});

process.on('uncaughtException', (err) => {
  console.log('Глобальный косяк приложения!!! ', err.stack);
}); //Если все пошло по пизде, спасет ситуацию
