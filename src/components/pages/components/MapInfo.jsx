import React from 'react';
import {
  Row, Col, Button, Typography,
} from 'antd';

import '../../../css/MapBox.css';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

const MapInfo = (props) => {
  const { cityStore } = props;
  const { addCity, current } = cityStore;

  if (!current) {
    return null;
  }

  const {
    name, temperature, humidity, wind, pressure,
  } = current;

  const onClick = () => addCity();

  return (
    <>
      <Col span={8} className="card">
        <Row type="flex" justify="start">
          <Typography className="cardHeader">
            {name}
            {' '}
          </Typography>
        </Row>
        <Row className="row" type="flex" justify="space-between">
          <Typography className="text">{'Temperature: '}</Typography>
          <Typography className="temp">{` ${temperature}°C`}</Typography>
        </Row>
        <Row>
          <Typography className="text">
            Wind:
            {wind}
            {' '}
            m/s
          </Typography>
        </Row>
        <Row>
          <Typography className="text">
            Pressure:
            {pressure}
          </Typography>
        </Row>
        <Row>
          <Typography className="text">
            Humidity:
            {humidity}
          </Typography>
        </Row>
      </Col>

      <Button
        onClick={onClick}
        className="balloon-button"
      >
        Add City
      </Button>

    </>
  );
};

export default inject('cityStore')(observer(MapInfo));


MapInfo.propTypes = {
  cityStore: PropTypes.objectOf({
    addCity: PropTypes.func,
    current: PropTypes.objectOf({
      name: PropTypes.string,
      temperature: PropTypes.string,
      humidity: PropTypes.string,
      wind: PropTypes.string,
      pressure: PropTypes.string,
      src: PropTypes.string,
    }),
  }).isRequired,
};
