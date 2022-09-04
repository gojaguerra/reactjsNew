import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <>
        {
            products.map((cerv)=><Item key={cerv.id} data={cerv} />)
        }
    </>
  )
}

export default ItemList