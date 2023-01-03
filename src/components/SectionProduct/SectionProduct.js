import React, {useContext} from 'react'
import "./SectionProduct.css"
import ProductContext from '../ProductContext/ProductContext'
import ProductCard from "../ProductCard/ProductCard"
import * as Constants from "../../constants"

const SectionProduct = () => {
    const {products, currentCategory,setProducts} = useContext(ProductContext);

    const ProductToCart = (id, situation) => {
        const clone = [...products];
        const productIndex = products.findIndex(p => p.id === id)
        if(situation === "increment"){
            clone[productIndex].amount > 0 ? clone[productIndex].amount += 1 : clone[productIndex].amount = 1
        } else if (situation === "decrement"){
            clone[productIndex].amount > 0 ? clone[productIndex].amount -= 1 : clone[productIndex].amount = 0
        }
        setProducts(clone)

    }


    const productCards = products.filter(product => product.category === currentCategory || currentCategory === Constants.ALL_CATEGORIES)
        .map( (product, index) => <ProductCard key={index} id={product.id} imgSrc={product.image} title={product.title} price={product.price} productToCart={ProductToCart} amount={product.amount ? product.amount : 0 }/>);

    return(
        <section className="products">
            {productCards}
        </section>
    )
}

export default SectionProduct