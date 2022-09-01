import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Greeting';
import ItemCount from './components/ItemCount';
import Boton from './components/Boton';

function App() {

  const stock = 10
  const [items, setItems] = useState(0)
  const sumar = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el maximo')
  const restar = () => items > 0 ? setItems(items - 1) : alert('no se pueden introducir valores negativos')

  return (
    <div className="App">
      <header className="App-header">
        <NavBar items={items}/>
      </header>
        <ItemListContainer Saludo="Hola Profe" />

        <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} />
      {/* {items === 10 && <Boton />} */}
    </div>
  );
}

export default App;
