import axios from "axios";
// axios.defaults.baseURL = "https://api.example.com";
const WETHER_API = "1d26acfa1f77bb2cde7a27ee95cb7567";

export async function getWether() {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat={1.37}&lon={32.29}&appid=${WETHER_API}`
    );
    console.log(weather);
    // return JSON.parse(users);
  } catch (error) {
    console.log(error);
  }
}
