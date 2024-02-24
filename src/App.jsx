import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import BodyCardContainer from './components/BodyCardContainer.jsx';
// import CardContainer from './components/CardContainer.jsx'; // Asumiendo que este es otro componente que podrías querer usar.

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<BodyCardContainer />} />
        <Route path="category/:idCategory" element={<BodyCardContainer />} />
        <Route path="item/:idItem"  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
