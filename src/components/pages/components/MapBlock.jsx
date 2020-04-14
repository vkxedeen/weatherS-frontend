import React from 'react';
import { Row, Col } from 'antd';

import '../../../css/MapBox.css';
import MapBox from './MapBox';
import MapInfo from './MapInfo';

const MapBlock = () => (
  <Row>
    <Col span={12}>
      <MapInfo />
    </Col>
    <Col span={12}>
      <MapBox />
    </Col>
  </Row>
);

export default MapBlock;
