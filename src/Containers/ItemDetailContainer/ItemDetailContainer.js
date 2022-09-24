import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { Data } from '../../Data/data';
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const[data, setData] = useState([]);
  const[loading, setLoading]=useState(true);
  const db = getFirestore();
  const queryDoc = doc(db, 'items', id);

  /* const[product, setProduct] = useState(); */
  const getProduct = async () => {

    await getDoc(queryDoc)
    .then((res) => {
      /* console.log(res.id);
      console.log(res.data()); */
     /*  setData(res.data()); */

      setData({id: res.id, ...res.data()});

    })
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
}

/* const getProduct = () => {

  const prodFiltro = Data.find((el) => el.id === id);
  setData(prodFiltro);
  
 }; */

useEffect(() => {
  getProduct();
}, []);

  return (
    <>
      <>
      {
      loading ? 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
        <div className='card1'>
          <ItemDetail data={data} />
        </div>
      }
      </>  
    </>
  );
};

export default ItemDetailContainer;