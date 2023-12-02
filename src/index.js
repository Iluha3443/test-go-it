import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'storage/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Iluha3443/test-go-it">
      <Provider store={store}>
      <App />
      </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
