import React from 'react';
import CitiesBox from './components/CitiesBox';
import MainLayout from '../layouts/MainLayout/MainLayout';
import MapBlock from './components/MapBlock';
import ErrorBoundary from '../ErrorBoundry';

const MainHomePage = () => (
  <ErrorBoundary>
    <MainLayout>
      <CitiesBox />
      <MapBlock />
    </MainLayout>
  </ErrorBoundary>
);

export default MainHomePage;
