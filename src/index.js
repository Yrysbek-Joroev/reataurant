import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardsContextProvider from './contexts/CardsContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import FavoriteContextProvider from './contexts/FavoriteContextProvider';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CardsContextProvider>
     <App />
  </CardsContextProvider>
  </BrowserRouter>
);
   <FavoriteContextProvider>
    <CartContextProvider>
     <CardsContextProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
     </CardsContextProvider>
    </CartContextProvider>
   </FavoriteContextProvider>
)


// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CardsContextProvider>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </CardsContextProvider>
// );

