import { computed } from 'mobx';

class CityEntity {
  constructor(city) {
    this.id = city.id;
    this.name = city.name;
    this.temperature = (city.main.temp - 273.15).toFixed(1);
    this.pressure = city.main.pressure;
    this.wind = city.wind.speed;
    this.humidity = city.main.humidity;
    this.icon = city.weather[0].icon;
    this.isLoaded = true;
    this.info = city.sys;
    this.coords = Object.keys(city.coord).reduceRight((cur, cord) => {
      cur.push(city.coord[cord]);
      return cur;
    }, []);
  }

  @computed
  get src() {
    return this.isLoaded
      ? `http://openweathermap.org/img/wn/${this.icon}@2x.png` : '';
  }
}

export default CityEntity;
