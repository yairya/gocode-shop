import React ,{useState} from 'react'
import Nav from "../Nav/Nav"
import SectionProduct from "../SectionProduct/SectionProduct"


const FirstPage = ({appData}) => {
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
  )
}

export default FirstPage