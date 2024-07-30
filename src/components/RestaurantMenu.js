import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{

    const[resInfo, setResInfo]=useState(null);

   const {resId}=useParams();
   //console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
       // const data=await fetch(RESTAURANT_MENU + resId);
       const data=await fetch(RESTAURANT_MENU + resId);
        const json=await data.json();
        console.log(json);
       setResInfo(json.data);
      
    }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;


 

   const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log(itemCards);



    return (
        <div className="menu">
            <h2>{name}</h2>
            <h4>Menu</h4>
            <p>{cuisines.join("")} - {costForTwoMessage}</p>
            
            <ul>            
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}> {item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.finalPrice/100 || item.card.info.price/100}</li>
                ))};
            </ul>
        </div>
    );
}

export default RestaurantMenu;