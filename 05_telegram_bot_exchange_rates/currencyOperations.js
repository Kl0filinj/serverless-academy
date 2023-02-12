import axios from "../04_telegram_bot_exchange_rates/node_modules/axios";
// axios.defaults.baseURL = "https://api.example.com";
// const WETHER_API = "1d26acfa1f77bb2cde7a27ee95cb7567";

const currencyCodes = {
  USD: 840,
  EUR: 978,
};

export async function getCurrency(curName) {
  try {
    const currencyRates = await axios.get(
      `https://api.monobank.ua/bank/currency`
    );
    // console.log(currencyRates.data);
    const filteredRates = currencyRates.data.find(
      (item) => item.currencyCodeA === currencyCodes[curName]
    );
    console.log(filteredRates);
    return filteredRates;
    // return JSON.parse(users);
  } catch (error) {
    console.log(error);
  }
}
