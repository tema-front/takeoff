import React from 'react';
import { Router } from './components/Router';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/style.scss';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
