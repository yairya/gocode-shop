import React, {useContext} from 'react'
import "./SectionProduct.css"
import ProductContext from '../ProductContext/ProductContext'
import ProductCard from "../ProductCard/ProductCard"
import * as Constants from "../../constants"

const SectionProduct = () => {
    const {products, currentCategory} = useContext(ProductContext);

    return(
        <section className="products">
            {products.filter(product => product.category === currentCategory || currentCategory === Constants.ALL_CATEGORIES)
            .map( (product, index) => <ProductCard key={index} imgSrc={product.image} title={product.title} price={product.price} />)}
        </section>
    )
}

export default SectionProduct