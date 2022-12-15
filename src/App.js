import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {AddProduct,Cart,LandingPage,Navbar,ProductDetails} from './components'

function App() {
  const [cart, setCart] = useState([]);
  const [productDetailspage, setProductDetailspage] = useState();
  return (<>
  
    <Router>
    <div className="container">
    <Navbar />
    <Routes>
      
            <Route
              exact
              path="/"
              element={<LandingPage  />}
            ></Route>

            <Route
              exact
              path="/cart"
              element={
                <Cart />
              }
            ></Route>

            <Route exact path="/addProduct" element={<AddProduct />}></Route>
            <Route exact path="/productDetails" element={<ProductDetails/>}></Route>

          </Routes>
    </div>
    </Router>
    
    
    </>);
}

export default App;
