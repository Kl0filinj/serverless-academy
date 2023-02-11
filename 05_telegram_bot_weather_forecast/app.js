import TelegramApi from "node-telegram-bot-api";
import { startOption } from "./options.js";
import { getCurrency } from "./currencyOperations.js";

const TOKEN = "5881842751:AAEPX7Pxd70lmigh6LoPIqcikRoI5v530zM";
const bot = new TelegramApi(TOKEN, { polling: true });

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "Check current exchange rates" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    try {
      if (text === "/start") {
        return bot.sendMessage(chatId, "Choose the currency", startOption);
      }
      if (text === "USD" || text === "EUR") {
        const result = await getCurrency(text);
        console.log(result);
        return bot.sendMessage(
          chatId,
          `Here is rates for ${text}: \nBuy: ${result.rateBuy}\nSell: ${result.rateSell}`
        );
      }
      // if (
      //   text === "at intervals of 3 hours" ||
      //   text === "at intervals of 6 hours"
      // ) {
      //   const weather = await getWether();
      //   return console.log("1234532131313213131231313131231231221");
      // }

      return bot.sendMessage(chatId, "Unknown command, try again");
    } catch (e) {
      return bot.sendMessage(chatId, "Something went wrong");
    }
  });
};

start();
