import React ,{useState, useEffect} from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import ProductContext from './components/ProductContext/ProductContext'
import * as Constants from "./constants"
import About from './views/About';
import Home from './views/Home';


const resJsonGET = async (address, setFunc) => {
  try{
    const response = await fetch (address);
    const resJson = await response.json();
    setFunc(resJson);
  }
  catch(err){
    console.log(`catch err: ${err}`);
  }
}

const Main = () => 
{
  const [products, setProducts] = useState([]);
  const [currentCategory, setCategory] = useState(Constants.ALL_CATEGORIES);

  useEffect(() => {
    resJsonGET("https://fakestoreapi.com/products", setProducts);
  },[]);

  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);

  return (
    <BrowserRouter>
      <ProductContext.Provider value={{products, setProducts, categories, currentCategory, setCategory}}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default Main;
