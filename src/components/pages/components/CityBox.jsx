import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Avatar, Typography, Col,
} from 'antd';
import '../../../css/CardBox.css';
import { inject, observer } from 'mobx-react';

const CityBox = (props) => {
  const { city, cityStore } = props;
  const {
    name, temperature, humidity, wind, pressure, src, id,
  } = city;
  const colorClass = temperature > 5 ? 'warmColor' : 'coldColor';

  return (
    <Col span={8} className="card">
      <div className={`city-card ${colorClass}`}>
        <Row type="flex" justify="start">
          <Typography className="cardHeader">
            {name}
            {' '}
          </Typography>
          <Avatar className="image" src={src} />
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
        <Typography
          className="deleteText"
          onClick={() => cityStore.deleteCity(id)}
        >
          Удалить
        </Typography>
      </div>
    </Col>
  );
};

export default inject('cityStore')(observer(CityBox));

CityBox.propTypes = {
  cityStore: PropTypes.objectOf({
    deleteCity: PropTypes.func,
  }).isRequired,
  city: PropTypes.objectOf({
    name: PropTypes.string,
    temperature: PropTypes.string,
    humidity: PropTypes.string,
    wind: PropTypes.string,
    pressure: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
};
