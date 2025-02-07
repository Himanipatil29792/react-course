import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
//let btnLogin="Login";

const [btnNameReact, setBtnNameReact]=useState("Login");
// console.log("Header Rendered");

//If no dependency array => useEffect is called on every time to render
//If dependency array is empty = [] => useEffect is called on initial render(just once time)
//If dependency array is [btnNameReact] => called every time btnNameReact is updated.
useEffect(()=>{
 //  console.log("useEffect Called");
},[]);

const onlineStatus=useOnlineStatus();

const {loggedInUser}=useContext(UserContext);
// console.log(loggedInUser);   //loggedInUser Show

//Subscribing to the store using a Selector
const cartItems = useSelector((store) => store.cart.items);
// console.log(cartItems);

    return (
      <div className="flex justify-between my-2 bg-purple-200 shadow-lg sm:bg-yellow-100 lg:bg-blue-100 w-100 flex-wrap">
        <div className="logo-container">
          <img
            className="logo w-24"
            alt="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-2 pr-4">
          <li>Online Status: {onlineStatus ? "✅" : "❎"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 font-bold text-xl"> <Link to="/cart">Cart ({cartItems.length} items)</Link></li>
            <button className="login" onClick={()=>{
             // btnNameReact="Logout";
              
              // setBtnNameReact("Logout");
             // console.log(btnNameReact);
             btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>

            <li className="font-bold px-4"> {loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;