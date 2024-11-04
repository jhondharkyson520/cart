import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './App.tsx';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import CartProvider from './contexts/CartContext';
import {Toaster} from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
    <Toaster
      position="bottom-center"
      reverseOrder={false}
    />
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
