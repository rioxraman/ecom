import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { addcartItem } from "./Redux/CartSlice";
import { useDispatch } from "react-redux";
import {AddProduct,Cart,LandingPage,Navbar,ProductDetails} from './components'
import ToastNotification from "./components/ToastNotification";
import { toast } from "react-toastify";


function App() {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState();
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    try {
      dispatch(addcartItem(item));
      toast.success(`Added to Cart`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePdp = (e, item) => {
    console.log(`item of pdp`, item)
    setProductDetails(item)
  }
  console.log(`productDetails`, productDetails)
  return (<>
  
    <Router>
    <div className="container">
    <Navbar />
    <Routes>
      
     <Route exact path="/" element={<LandingPage handleClick={handleClick} handlePdp={handlePdp} />}></Route>
     <Route exact path="/cart" element={<Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
     <Route exact path="/addProduct" element={<AddProduct />}></Route>
      <Route exact path="/productDetails" element={<ProductDetails handleClick={handleClick} productDetails={productDetails}/>}></Route>

    </Routes>
    <ToastNotification />
    </div>
    </Router>
    
    
    </>);
}

export default App;
