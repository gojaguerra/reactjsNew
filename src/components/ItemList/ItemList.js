import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <>
        {products.map((item) => (
          <Link 
            key={item.id}
            to={'/detail/' + item.id}
            style={{ textDecoration:'none' }}
          >
            <Item data={item} 
          />
          </Link>
          ))}
    </>
  );
};

export default ItemList