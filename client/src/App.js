import React, { Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Content from './components/Content';
import store from './store';
import AppNavbar from './components/AppNavbar'
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <AppNavbar />
        <Content />
      </Fragment>
    </Provider>
  );
}

export default App;
