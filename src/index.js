import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsContextProvider from './contexts/CardsContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import FavoriteContextProvider from './contexts/FavoriteContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteContextProvider>
  <CartContextProvider>
   <CardsContextProvider>
    <App />
   </CardsContextProvider>
  </CartContextProvider>
  </FavoriteContextProvider>
);

