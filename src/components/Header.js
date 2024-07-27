import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
//let btnLogin="Login";

const [btnLogin, setBtnLogin]=useState("Login");
console.log("Header Rendered");

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
            <li className="px-4">Home</li>
            <li className="px-4">About Us</li>
            <li className="px-4">Contact Us</li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={()=>{
             // btnLogin="Logout";
              
              // setBtnLogin("Logout");
             // console.log(btnLogin);
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
            }}>{btnLogin}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;