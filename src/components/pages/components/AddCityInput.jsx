import React from 'react';
import { Input } from 'antd';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

const { Search } = Input;

const AddCityInput = (props) => {
  const { cityStore } = props;
  const { cityName, onLoad, setCityName } = cityStore;
  return (
    <Search
      placeholder="Type your city name"
      className="input"
      value={cityName}
      onChange={(e) => {
        setCityName(e.target.value);
      }}
      onPressEnter={() => onLoad(cityName)}
      style={{
        width: 250,
        padding: '12px 0',
      }}
    />
  );
};

export default inject('cityStore')(observer(AddCityInput));

AddCityInput.propTypes = {
  cityStore: PropTypes.objectOf({
    cityName: PropTypes.string,
    onLoad: PropTypes.func,
    setCityName: PropTypes.func,
  }).isRequired,
};
