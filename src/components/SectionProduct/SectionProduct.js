import React from 'react'
import "./SectionProduct.css"
import ProductCard from "../ProductCard/ProductCard"
import * as Constants from "../../constants"

const SectionProduct = ({products, category}) => {
    return(
        <section className="products">
            {products.filter(product => product.category === category || category === Constants.ALL_CATEGORIES)
            .map( (product, index) => <ProductCard key={index} imgSrc={product.image} title={product.title} price={product.price} />)}
        </section>
    )
}

export default SectionProduct