import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearItem} from "../utils/cartSlice";

const Cart = () =>{

    const cartItems=useSelector((store) => store.cart.items);

    // const store=useSelector((store) => store);
    // const cartItems=store.cart.items;   // less efficient

    //console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart=() => {
        dispatch(clearItem());
    }

    return (
    <div className="mt-28 text-center">
        <h1 className="font-bold text-3xl p-4 m-4">Cart</h1>

        <div className="w-6/12 m-auto">
            <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white">Clear Cart</button>
            
            {cartItems.length == 0 && <h1>Cart is empty. Add Item to the Card !!</h1>}

            <ItemList items={cartItems} />
        </div>
    </div>
)}

export default Cart;