import React ,{useState} from 'react'
import './App.css';
import Nav from "./components/Nav/Nav"
import SectionProduct from "./components/SectionProduct/SectionProduct"
import appData from "./data/AppData"

function App() {
  const [currentCategory, setCategory] = useState("All categories");
  const setCurrentCategory = (category) =>
  {
    setCategory(category);
  }    
  appData.useState.currentCategory.setCategory = setCurrentCategory;

  appData.categories = appData.products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
  return (
    <div>
        <Nav appData={appData}/>
        <SectionProduct products={appData.products} category={currentCategory}/>
    </div>
  );
}

export default App;
