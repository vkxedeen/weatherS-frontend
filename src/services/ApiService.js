const WEATHER_API_KEY = '2417412f059437d0d042a7841175d870';

const ApiService = {
  getCity(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${WEATHER_API_KEY}`)
      .then((res) => res.json());
  },

  getFiveDays(cityName) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${WEATHER_API_KEY}`)
      .then((res) => res.json());
  },

  getByCoords([lat, lon]) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&APPID=${WEATHER_API_KEY}`)
      .then((res) => res.json());
  },
};

export default ApiService;
