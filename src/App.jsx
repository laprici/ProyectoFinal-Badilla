import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import BodyCardContainer from './components/BodyCardContainer.jsx'
// import CardContainer from './components/CardContainer.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<BodyCardContainer />}>
          </Route>
          <Route path='category/:idCatLanguage' element={<BodyCardContainer />}></Route>
          <Route path='item/:idItem' ></Route>
        </Routes>
      <BodyCardContainer />
    </BrowserRouter>
  );
}

export default App;
