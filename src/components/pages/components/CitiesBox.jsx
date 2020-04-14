import React from 'react';
import { Row } from 'antd';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import CityBox from './CityBox';

const CitiesBox = (props) => {
  const { cityStore } = props;
  const { cities } = cityStore;
  return (
    <Row className="citiesBox" justify="start">
      {!!cities.length && cities.map((city) => (
        <CityBox key={city.id} city={city} />
      ))}
    </Row>
  );
};

export default inject('cityStore')(observer(CitiesBox));

CitiesBox.propTypes = {
  cityStore: PropTypes.objectOf({
    cities: PropTypes.array,
  }).isRequired,
};
