import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import cityStore from './stores/CityStore';
import MainHomePage from './components/pages/MainHomePage';

const App = () => (
  <Provider cityStore={cityStore}>
    <BrowserRouter>
      <div>
        <MainHomePage />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
