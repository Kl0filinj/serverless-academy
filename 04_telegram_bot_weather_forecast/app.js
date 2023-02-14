import TelegramApi from "node-telegram-bot-api";
import { startOption, weatherOptions } from "./options.js";
import { getWether } from "./weaterOperations.js";

// const getIconUrl = (icon) => {
//   return `http://openweathermap.org/img/wn/${icon}@2x.png`;
// };

const TOKEN = "6288012322:AAEjIbHMw1by26N8iF-56DIP07JfU0xmIR8";
const bot = new TelegramApi(TOKEN, { polling: true });

const start = async () => {
  bot.setMyCommands([
    { command: "/start", description: "What about the weather ?" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    try {
      if (text === "/start") {
        return bot.sendMessage(chatId, "Start", startOption);
      }
      if (text === "Weather in Uganda") {
        return bot.sendMessage(chatId, "Choose the period", weatherOptions);
      }
      if (
        text === "at intervals of 3 hours" ||
        text === "at intervals of 6 hours"
      ) {
        const weather = text.includes("3")
          ? await getWether()
          : await getWether(6);
        return bot.sendMessage(chatId, weather);
      }

      return bot.sendMessage(chatId, "Unknown command, try again");
    } catch (e) {
      return bot.sendMessage(chatId, "Something went wrong");
    }
  });
};

start();
