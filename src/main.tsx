import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Store } from "./app/Store.ts";
import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react/ApiProvider';
// import { productsApi } from './features/Api/postApiSlice.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
