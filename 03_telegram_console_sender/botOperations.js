import TelegramBot from "node-telegram-bot-api";

const TOKEN = "5898603347:AAHczCTxLHOz1L3xSwztCtnZbisDpf13Dt4";
const CHAT_ID = "-1001778199539";

const bot = new TelegramBot(TOKEN, { polling: true });

export async function sendMessage(text) {
  try {
    await bot.sendMessage(CHAT_ID, text.trim());
    console.log("\n You Successfully sent a message !");
    return;
  } catch (error) {
    console.log(error);
  }
}

export async function sendPhoto(path) {
  try {
    await bot.sendPhoto(CHAT_ID, path);
    console.log("\n You Successfully sent a message !");
    return;
  } catch (error) {
    console.log(error);
  }
}
