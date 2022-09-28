import React from 'react'
/* import getFetch from '../../Data/data' */
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList'
/* import { Data } from '../../Data/data'; */
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    
    const[data, setData]=useState([]);
    const[loading, setLoading]=useState(true);
    const { categoryName } = useParams();

    const getProducts = () => {
      const db = getFirestore();
      const querySnapshot = collection(db, 'items');
      
      if(categoryName){
        const queryFiltered = query(querySnapshot, where('category', '==', categoryName));
        getDocs(queryFiltered)
        .then(response => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data()};
          });
          setData(data);
        })
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      } else {
        getDocs(querySnapshot)
        .then(response => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data()};
          });
          setData(data);  
        })
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      }
    }

    useEffect(() => {
      getProducts();
    }, [categoryName]);

  return (
  <>
    {
    loading ? 
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    :
    <ItemList products={data} categoria={categoryName} ></ItemList>
    }
  </>
)}

export default ItemListContainer