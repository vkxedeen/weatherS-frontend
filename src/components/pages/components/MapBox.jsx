import React, { useEffect } from 'react';
import geoMap from '../../../services/geoMap';

import '../../../css/MapBox.css';
// eslint-disable-next-line import/no-named-as-default
import cityStore from '../../../stores/CityStore';


const MapBox = () => {
  const onClick = (e) => {
    const coords = e.get('coords');
    cityStore.loadByCoords(coords);
  };


  const onInit = (coords) => {
    cityStore.loadByCoords(coords);
  };

  useEffect(() => {
    async function getMap() {
      await geoMap.init(onClick, onInit);
    }

    getMap();
  });

  return (
    <div id="map" className="map" />
  );
};

export default MapBox;
