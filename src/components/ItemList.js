import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList =({items}) =>{
   // console.log(items );

   const dispatch = useDispatch();

   const handleAddItem = (item) =>{
    //Dispatch an action
    // dispatch(addItem("pizza")); 
    dispatch(addItem(item));
   }

    return(
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between flex-wrap">
                   
                <div className="lg:w-9/12 sm:w-full">
                        <span className="font-bold py-2">{item.card.info.name}</span>
                        <span className="font-bold">- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="lg:w-3/12 sm:w-full">
                        <div className="absolute"><button className="p-1 bg-white shadow-lg rounded-lg text-orange-600 mx-7 mt-12 text-sm font-bold" onClick={() => handleAddItem(item)}>Add <i class="fa fa-plus" aria-hidden="true"></i></button></div>
                        <img src={CON_URL + item.card.info.imageId} className="w-28"/>
                </div>

                </div>
            ))} 
        </div>
    );
}
export default ItemList;