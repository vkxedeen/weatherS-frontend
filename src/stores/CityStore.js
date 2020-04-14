import { action, computed, observable } from 'mobx';
import CityEntity from './CityEntity';
import ApiService from '../services/ApiService';
import geoMap from '../services/geoMap';

// import FakeApiService from "../services/FakeApiService";

class CityStore {
  @observable cityName;

  @observable cities = [];

  @observable $current;

  api = ApiService;

  constructor() {
    this.addCity = this.addCity.bind(this);
    this.setCityName = this.setCityName.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  @action
  setCityName(name) {
    this.cityName = name;
  }

  @computed
  get current() {
    return this.$current;
  }

  set current(city) {
    this.$current = new CityEntity(city);
  }

  onLoad() {
    const target = this.cities.find((o) => o.name.toLowerCase() === this.cityName.toLowerCase());
    if (!target) {
      this.load();
    }
  }


  load() {
    this.api.getCity(this.cityName)
      .then((res) => {
        this.current = res;
        this.cityName = '';
      })
      .catch(console.error);
  }


  loadByCoords(coords) {
    this.api.getByCoords(coords)
      .then((res) => {
        this.current = res;
      });
  }

  @action
  addCity = (city = this.current) => {
    if (this.getCityById(city.id)) {
      return;
    }
    this.cities.unshift(city);

    geoMap.setPlaceMark(city);
  };

  // getFiveDaysWeather() {
  //   return this.api.getFiveDays(this.active.name)
  //       .then(console.log)
  //       .catch(console.log)
  // }

  getCityById(id) {
    return this.cities.find((item) => item.id === id);
  }

  deleteCity(id) {
    this.cities = this.cities.filter((item) => item.id !== id);
  }
}

const cityStore = new CityStore();
export default cityStore;
