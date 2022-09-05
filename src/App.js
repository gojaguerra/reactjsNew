import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import ItemListContainer from './components/Greeting';
// import ItemCount from './components/ItemCount';
// import Boton from './components/Boton';
// import getFetch from './Data/data';
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';

function App() {

  const stock = 10;
  const [items, setItems] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar items={items}/>
      </header>
{/*       <div>
        <ItemCount stock={stock}/>
      </div> */}
      <div className="aaApp-items" id="producto-contenedor">
        <ItemListContainer/>
      </div>

{/*       <div>
      {
      loading ? <h2>Cargando....</h2>:
        data.map( product => <li key={product.id}>{product.id}
        {product.name}
        <img src={product.image} width='150' height={'150'} /></li>)
      }
      </div> */}


{/*         <ItemListContainer Saludo="Desafio Clase #5" />
        <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} /> */}
      {/* {items === 10 && <Boton />} */}
    </div>
  );
}

export default App;
