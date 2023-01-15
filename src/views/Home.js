import React from 'react'
import Nav from "../components/Nav/Nav"
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import ToggleButton from '../components/ToggleButton/ToggleButton';
import SectionProduct from "../components/SectionProduct/SectionProduct"
import Footer from '../components/Footer/Footer';

const Home = () => 
{
  return (
      <div>
        <Nav/>
        <ToggleButton/>
        <SectionProduct/>
        <ShoppingCart/>
        <Footer/>
      </div>
  );
}

export default Home;