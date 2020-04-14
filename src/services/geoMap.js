import loadjs from 'loadjs';

class GeoMap {
  constructor() {
    this.map = undefined;
    this.loadingPromise = this.loadingPromise
        || new Promise((resolve) => {
          loadjs(
            'https://api-maps.yandex.ru/2.1/?apikey=1d1b9fe7-c7a6-4625-ae2b-11855153a0b2&lang=ru_RU',
            () => {
              window.ymaps.ready(() => {
                this.mapModule = window.ymaps;
                resolve(this);
              });
            },
          );
        });
  }

  async init(onClick, onInit) {
    await this.loadingPromise;
    const { geolocation } = window.ymaps;
    const location = await geolocation.get({
      provider: 'yandex',
      mapStateAutoApply: true,
    });

    this.map = await new this.mapModule.Map('map', {
      center: location.geoObjects.position,
      zoom: 5,
      controls: ['zoomControl'],
    }, {
      balloonMaxWidth: 200,
    });

    onInit(location.geoObjects.position);
    this.setCurrentPosition(location);
    this.map.events.add('click', onClick);
  }

  setCurrentPosition(location) {
    location.geoObjects.options.set('preset', 'islands#redCircleIcon');
    location.geoObjects.get(0).properties.set({
      balloonContentBody: 'Current position',
    });
    this.map.geoObjects.add(location.geoObjects);
  }

  setPlaceMark(city) {
    const myPlacemark = new window.ymaps.Placemark(city.coords, {
      balloonContentBody: [
        city.name,
        city.temperature,
      ].join(''),
    }, {
      preset: 'islands#redDotIcon',
    });

    this.map.geoObjects.add(myPlacemark);
  }
}

const geoMap = new GeoMap();
export default geoMap;
