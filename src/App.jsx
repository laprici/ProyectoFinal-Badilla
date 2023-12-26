import './App.css'
import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {

  const message = 'Hola, mensaje hacia el componente';
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message={message} />
    </div>
  );
}

export default App;
