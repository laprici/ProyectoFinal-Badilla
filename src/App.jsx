import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
// import CardContainer from './components/CardContainer.jsx';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/'>
        </Route>
        <Route path='category/:idCategory'></Route>
        <Route path='item/:idItem'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
