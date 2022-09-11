import React from 'react'
import logo from "../../logo.svg";
import getFetch from '../../Data/data'
import { useState,useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = ({ Saludo }) => {
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const idSeleccion = 3;

  useEffect(() => {
      getFetch
      .then((response) => { 
          const prodFiltro = response.find((el) => el.id === idSeleccion);
          setData(prodFiltro);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    },[])

  return (
    <>
      {loading ? (
        <>
          <img src={logo} className="App-logo" alt="logo" />
          <span>Cargando...</span>
        </>
      ) : (
        <>
          <h1 className="texto">{Saludo}</h1>
          <div className='card1'>
            <ItemDetail data={data} />
          </div>  
        </>  
      )}
    </>
  );
};

export default ItemDetailContainer;