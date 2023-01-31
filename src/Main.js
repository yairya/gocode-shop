import React ,{useState, useEffect} from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import ProductContext from './components/ProductContext/ProductContext'
import * as Constants from "./constants"
import { GetJson } from './hooks/GetJson';
import About from './views/About';
import Home from './views/Home';
import ProductDetails from './views/ProductDetails';

const Main = () => 
{
  const [products, setProducts] = useState([]);
  const [currentCategory, setCategory] = useState(Constants.ALL_CATEGORIES);

  useEffect(() => {
    GetJson("http://localhost:8080/api/eshop/product", setProducts);
  },[]);

  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);

  return (
    <BrowserRouter>
      <ProductContext.Provider value={{products, setProducts, categories, currentCategory, setCategory}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:productId" element={<ProductDetails/>} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default Main;
