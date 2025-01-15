import { useContext } from "react";
import { CON_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{

const {loggedInUser}=useContext(UserContext);

    // const {resName,cuisine}=props;
      const {resData}=props;
    console.log(resData);
    
      const {name,cuisines,avgRating,costForTwo,deliveryTime}=resData.info;
     
      return (
      <div data-testid="resCard" className="res-card m-4 p-4 w-[220px] rounded-lg bg-slate-100 hover:bg-slate-200">
        <img className="rounded-lg h-[120px] w-[100%]" alt="res-img" src={
          CON_URL + resData.info.cloudinaryImageId
        }/>
        {/* <h3>{resData.resName}</h3> */}

        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>{resData.data.costForTwo/100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes  </h4> */}

        <h3 className="font-bold text-lg py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes  </h4>
        <h4>User: {loggedInUser}</h4>
      </div>
  )
}

//Higher Order Component

//input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;