import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
//let btnLogin="Login";

const [btnNameReact, setBtnNameReact]=useState("Login");
console.log("Header Rendered");

//If no dependency array => useEffect is called on every time to render
//If dependency array is empty = [] => useEffect is called on initial render(just once time)
//If dependency array is [btnNameReact] => called every time btnNameReact is updated.
useEffect(()=>{
  console.log("useEffect Called");
},[]);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo w-28"
            alt="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul className="">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=>{
             // btnNameReact="Logout";
              
              // setBtnNameReact("Logout");
             // console.log(btnNameReact);
             btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;