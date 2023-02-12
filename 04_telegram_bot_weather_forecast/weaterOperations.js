import axios from "axios";
// axios.defaults.baseURL = "https://api.example.com";
const WETHER_API = "1d26acfa1f77bb2cde7a27ee95cb7567";

export async function getWether() {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Uganda&appid=${WETHER_API}`
    );
    return weather.data.weather[0];
  } catch (error) {
    console.log(error);
  }
}
