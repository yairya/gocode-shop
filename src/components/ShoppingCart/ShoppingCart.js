import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';
import ProductContext from '../ProductContext/ProductContext'
import ShoppingCartProduct from '../ShoppingCartProduct/ShoppingCartProduct';
import { Divider } from "@mui/material";

export default function ShoppingCart() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

    const {products, setProducts} = React.useContext(ProductContext);
    const RemoveFromCart = (id) => 
    {
      const clone = [...products];
      const productIndex = clone.findIndex(p => p.id === id);
      clone[productIndex].amount = 0;
      console.log("this is the id: " + productIndex);
      setProducts(clone);
    }

    const shoppingCartProducts = products.filter(product => product.amount > 0)
        .map( (product, index) =>(
          <Box display="flex" flexDirection="row" justifyContent="space-around" alignContent="center" width="30%" border="2px black solid" >
            <ShoppingCartProduct key={index} id={product.id} imgSrc={product.image} title={product.title} price={product.price} amount={product.amount} removeFromCart={RemoveFromCart}/>
            <Divider />
          </Box>
        ));

  const list = () => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      {shoppingCartProducts}
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <IconButton size="large" color="primary" onClick={toggleDrawer(true)}>
          <ShoppingCartCheckout />
        </IconButton>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
