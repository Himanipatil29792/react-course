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
      <div className="flex sm:px-0 lg:px-40 justify-between bg-purple-200 shadow-lg sm:bg-yellow-100 lg:bg-orange-600 flex-wrap fixed top-0 w-full z-40">
        <div className="logo-container">
          <img
            className="logo w-24"
            alt="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-2 pr-4 text-white font-bold text-lg">
          <li>Online: {onlineStatus ? "✅" : "❎"}</li>
            <li className="px-4 hover:text-black"><Link to="/"> <i class="fa fa-home" aria-hidden="true"></i>&nbsp; Home</Link></li>
            <li className="px-4 hover:text-black"><Link to="/about"><i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; About Us</Link></li>
            <li className="px-4 hover:text-black"><Link to="/grocery"><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp; Grocery</Link></li>
            <li className="px-4 hover:text-black"><Link to="/contact"><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp; Contact Us</Link></li>
            <li className="px-4 hover:text-black"> <Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp; Cart <span className="font-bold">{cartItems.length}</span> </Link></li>
            <button className="px-4 login" onClick={()=>{
             // btnNameReact="Logout";
              
              // setBtnNameReact("Logout");
             // console.log(btnNameReact);
             btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp; {btnNameReact}</button>

            {/* <li className="font-bold px-4"> {loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    );
  };

  export default Header;