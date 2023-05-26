import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsContextProvider from './contexts/CardsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CardsContextProvider>
    <App />
  </CardsContextProvider>
);

