import React ,{useState, useEffect} from 'react'
import Routes from 'react-router-dom'
import './App.css';
import Nav from "./components/Nav/Nav"
import SectionProduct from "./components/SectionProduct/SectionProduct"
import ProductContext from './components/ProductContext/ProductContext'
import * as Constants from "./constants"
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ToggleButton from './components/ToggleButton/ToggleButton';

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
    <ProductContext.Provider value={{products, setProducts, categories, currentCategory, setCategory}}>
      <div>
          <Routes>
            <Nav/>
            <ToggleButton/>
            <SectionProduct/>
            <ShoppingCart/>
          </Routes>
      </div>
    </ProductContext.Provider>
  );
}

export default Main;
