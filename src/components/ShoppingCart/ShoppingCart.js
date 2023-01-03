import React from 'react'
import "./ShoppingCart.css"
import ProductContext from '../ProductContext/ProductContext'

const ShoppingCart = () => {
    const {products} = useContext(ProductContext);

  return (
    <div>ShoppingCart</div>
  )
}

export default ShoppingCart