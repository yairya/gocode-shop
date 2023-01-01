import React ,{useState} from 'react'
import './App.css';
import Nav from "./components/Nav/Nav"
import SectionProduct from "./components/SectionProduct/SectionProduct"
import appData from "./data/AppData"


// const resJsonGET = async (address) => 
// {
//   const response = await fetch (address).then(response => 
//       {
//           if( ! response.ok)
//           {
//               throw `fetch call falied with status: ${response.status}`;
//           }
//           return response;
//       })
//       .catch(err =>
//       {
//           console.log(`catch err: ${err}`);
//       });

//   const resJson = await response.json().then(json => 
//       {
//           return json;
//       })
//       .catch(err =>
//       {
//           console.log(err);
//       });

//   // appData = resJson;
//   console.log(resJson);
// }

function App() {

  // resJsonGET("https://fakestoreapi.com/products");
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
