import React, {useContext} from 'react'
import "./ShoppingCart.css"
import ProductContext from '../ProductContext/ProductContext'
import ShoppingCartProduct from '../ShoppingCartProduct/ShoppingCartProduct';


const ShoppingCart = () => {
    const {products} = useContext(ProductContext);
    const shoppingCartProducts = products.filter(product => product.amount > 0)
        .map( (product, index) => <ShoppingCartProduct key={index} id={product.id} imgSrc={product.image} title={product.title} price={product.price} amount={product.amount}/>);

  return (
    <div className='Shopping-Cart'>
      <h5>ShoppingCart</h5>  
      {shoppingCartProducts}
    </div>
  )
}

export default ShoppingCart