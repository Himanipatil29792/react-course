import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItem,setShowIndex}) => {

    //ShowItem hide and show using useState
   // const [showItem, setShowItem]=useState(false);

    const handleClick = () =>{
       // console.log("Clicked");
      // setShowItem(true);
      // setShowItem(!showItem);   //Toggle a Item
      setShowIndex();
    }

    //console.log(data);
    return (
        <div>
            {/* Header */}
            <div className="bg-gray-100 w-6/12 mx-auto my-4 cursor-pointer shadow-lg p-4">
               <div className="flex justify-between" onClick={handleClick}>
               <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
               <span>⬇️</span>
               </div>

                 {/* Accordian Body */}
            {showItem && <ItemList items={data.itemCards} />}
            </div>

           
        </div>
    );
}

export default RestaurantCategory;