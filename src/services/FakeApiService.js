export default class FakeApiService {
  constructor() {
    this.fakeCity = {
      coord: { lon: 55.3, lat: 25.27 },
      weather: [{
        id: 721, main: 'Haze', description: 'haze', icon: '50d',
      }],
      base: 'stations',
      main: {
        temp: 298.11, pressure: 1012, humidity: 74, temp_min: 297.15, temp_max: 300.15,
      },
      visibility: 4500,
      wind: { speed: 3.6, deg: 150 },
      clouds: { all: 0 },
      dt: 1572060213,
      sys: {
        type: 1, id: 7537, country: 'AE', sunrise: 1572056551, sunset: 1572097372,
      },
      timezone: 14400,
      id: 292223,
      name: 'FakeCity',
      cod: 200,
    };
  }

  getCity() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.fakeCity), 500);
    });
  }
}
