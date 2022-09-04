import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/Greeting';
import ItemCount from './components/ItemCount';
// import Boton from './components/Boton';
// import getFetch from './Data/data';
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';

function App() {

  const stock = 10;
  const [items, setItems] = useState(0);
/*   const stock = 10
  const sumar = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el maximo')
  const restar = () => items > 0 ? setItems(items - 1) : alert('no se pueden introducir valores negativos') */

/*   const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)

  const setStateFalse=()=>{
    setLoading(false)
  }
  const setStateTrue=()=>{
    setLoading(true)
  } */
  
/*   useEffect(()=>{
    getFetch
    .then((response)=>setData(response))
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false))
  },[]) */

  return (
    <div className="App">
      <header className="App-header">
        <NavBar items={items}/>
      </header>
      <div>
        <ItemCount stock={stock}/>
      </div>
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
