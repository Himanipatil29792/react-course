import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{

   // const[resInfo, setResInfo]=useState(null);

   const [showIndex, setShowIndex]=useState(0);

   const {resId}=useParams();
   //console.log(resId);

   //This is a Custom hooks
   const resInfo=useRestaurantMenu(resId);

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu=async()=>{
    //    const data=await fetch(RESTAURANT_MENU + resId);
    //     const json=await data.json();
    //     console.log(json);
    //    setResInfo(json.data);
    // }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;


 

   const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   // console.log(itemCards);

// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories=
   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
        c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

   // console.log(categories);


    return (
        <div className="text-center mt-32">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <p className="font-bold">{cuisines.join("")} - {costForTwoMessage}</p>
            
            {/* <ul>          // Print Menu for each itemcard    
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}> {item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.finalPrice/100 || item.card.info.price/100}</li>
                ))};
            </ul> */}

        {categories.map((category,index) => (
            //Controlled component
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
            showItem={index === showIndex ? true : false} 
            setShowIndex={()=>setShowIndex(index)} />
        ))}
        </div>
    );
}

export default RestaurantMenu;