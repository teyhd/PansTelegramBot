const PORT = process.env.PORT || 3334;
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const token = '5709701051:AAEd99zSio5yiEgIXPDlbpUebqbkrZOrCpA';
const bot = new TelegramBot(token, {polling: true});
app.listen(PORT, ()=>{
    console.log('Телеграм запущен порт:', PORT)
 })

 app.get('/',async (req,res)=>{
    if (req.query.msg!=undefined && req.query.num!=undefined) {
        res.send('SEND')
        let number = req.query.num;
        let message = req.query.msg;
        bot.sendMessage(`${number}`, message);
    } else{
        res.send('NO' +req.query)
    }
})
bot.sendMessage(304622290, "Телеграм бот - запущен");

http://localhost:3334?msg=hi&num=304622290


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
   bot.sendMessage(304622290, `${msg.chat.id} написал сообщение\n ${msg.text}`);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Функция живых ответов - в разработке!');
});

 // sendDice()
process.on('uncaughtException', (err) => {
  console.log('Глобальный косяк приложения!!! ', err.stack);
}); //Если все пошло по пизде, спасет ситуацию