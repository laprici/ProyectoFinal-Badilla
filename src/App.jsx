import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import BodyCardContainer from './components/BodyCardContainer.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import CartProvider from './context/CartContext.jsx';
import Cart from './components/Cart.jsx';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<BodyCardContainer />} />
          <Route path="category/:idCategory" element={<BodyCardContainer />} />
          <Route path="product-detail/:id" element={<ProductDetail />}/>
          <Route path="cart" element={<Cart />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
