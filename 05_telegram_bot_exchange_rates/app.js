import TelegramApi from "node-telegram-bot-api";
import { startOption } from "./options.js";
import { getCurrency, myCache } from "./currencyOperations.js";

const TOKEN = "5881842751:AAEPX7Pxd70lmigh6LoPIqcikRoI5v530zM";
const bot = new TelegramApi(TOKEN, { polling: true });

const currencyCodes = {
  USD: 840,
  EUR: 978,
};

const getSelectedCurrecy = (selected, arr) => {
  return arr.find((item) => item.currencyCodeA === currencyCodes[selected]);
};
const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "Check current exchange rates" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      return bot.sendMessage(chatId, "Choose the currency", startOption);
    }
    if (text === "USD" || text === "EUR") {
      try {
        const result = await getCurrency();
        const { rateBuy, rateSell } = getSelectedCurrecy(text, result);
        return bot.sendMessage(
          chatId,
          `Here is rates for ${text}: \nBuy: ${rateBuy}\nSell: ${rateSell}`
        );
      } catch (error) {
        const cachedResult = myCache.get("currency");
        const { rateBuy, rateSell } = getSelectedCurrecy(text, cachedResult);
        return bot.sendMessage(
          chatId,
          `Here is rates for ${text}: \nBuy: ${rateBuy}\nSell: ${rateSell}`
        );
      }
    }
    return bot.sendMessage(chatId, "Unknown command, try again");
  });
};

start();
