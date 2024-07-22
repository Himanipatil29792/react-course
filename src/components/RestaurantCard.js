import { CON_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    // const {resName,cuisine}=props;
      const {resData}=props;
      const {name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
      return (
      <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
        <img className="res-logo" alt="res-img" height="150px" src={
          CON_URL + resData.data.cloudinaryImageId
        }/>
        {/* <h3>{resData.resName}</h3> */}

        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>{resData.data.costForTwo/100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes  </h4> */}

        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} FOR TWO</h4>
        <h4>{deliveryTime} minutes  </h4>
      </div>
  )
}

export default RestaurantCard;