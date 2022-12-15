import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
            SkillTestHome
          </Link>

          <Link to={`/addProduct`} style={{ textDecoration: "none" }}>
            <span className="mx-5 text-white" style={{ fontSize: "15px" }}>
              Add a Product
            </span>
          </Link> 
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "15px" }}>Cart</span>
          </Link>
        </span>
        <div className="cart">
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span>
            <img src="https://cdn-icons-png.flaticon.com/512/891/891407.png" alt="cart" style={{width:'30px'}} />
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
