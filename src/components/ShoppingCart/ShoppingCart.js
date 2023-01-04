import React, {useContext} from 'react'
import "./ShoppingCart.css"
import ProductContext from '../ProductContext/ProductContext'
import ShoppingCartProduct from '../ShoppingCartProduct/ShoppingCartProduct';


const ShoppingCart = () => {
    const {products, setProducts} = useContext(ProductContext);
    const RemoveFromCart = (id) => 
    {
      const clone = [...products];
      const productIndex = clone.findIndex(p => p.id === id);
      clone[productIndex].amount = 0;
      console.log("this is the id: " + productIndex);
      setProducts(clone);
    }

    const shoppingCartProducts = products.filter(product => product.amount > 0)
        .map( (product, index) => <ShoppingCartProduct key={index} id={product.id} imgSrc={product.image} title={product.title} price={product.price} amount={product.amount} removeFromCart={RemoveFromCart}/>);

  return (
    <div className='Shopping-Cart'>
      <h5>ShoppingCart</h5>  
      {shoppingCartProducts}
    </div>
  )
}

export default ShoppingCart