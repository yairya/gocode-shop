import './App.css';
import Nav from "./components/Nav/Nav"
import SectionProduct from "./components/SectionProduct/SectionProduct"

const products = [
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  },
  {
    imgSrc: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
    title: "Winter Jacket",
    price: "$99.99"
  }
]

function App() {
  return (
    <div className="App">
      <Nav/>
      <SectionProduct products={products}/>
    </div>
  );
}

export default App;
