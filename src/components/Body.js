import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";



// const listOfRestaurant=[
//     {
//         data: {
//           id: "78036",
//           name: "Burger King",
//           cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//           locality: "Central Plaza, Kalina",
//           areaName: "Santacruz East",
//           costForTwo: 35000,
//           costForTwoString: "₹350 for two",
//           deliveryTime: 24,
//           cuisines: ["Burgers", "American"],
//           avgRating: 3.2,
//           feeDetails: {
//             restaurantId: "78036",
//             fees: [
//               {
//                 name: "BASE_DISTANCE",
//                 fee: 3200,
//               },
//               {
//                 name: "BASE_TIME",
//               },
//               {
//                 name: "ANCILLARY_SURGE_FEE",
//               },
//             ],
//             totalFee: 3200,
//           },
//           parentId: "166",
//           avgRatingString: "4.2",
//           totalRatingsString: "10K+",
//           sla: {
//             lastMileTravel: 1.5,
//             serviceability: "SERVICEABLE",
//             slaString: "24 mins",
//             lastMileTravelString: "1.5 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextCloseTime: "2023-11-30 03:45:00",
//             opened: true,
//           },
//           badges: {},
//           isOpen: true,
//           type: "F",
//           badgesV2: {
//             entityBadges: {
//               imageBased: {},
//               textBased: {},
//               textExtendedBadges: {},
//             },
//           },
//           aggregatedDiscountInfoV3: {
//             header: "ITEMS",
//             subHeader: "AT ₹129",
//           },
//           differentiatedUi: {
//             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             differentiatedUiMediaDetails: {
//               mediaType: "ADS_MEDIA_ENUM_IMAGE",
//               lottie: {},
//               video: {},
//             },
//           },
//           reviewsSummary: {},
//           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           restaurantOfferPresentationInfo: {},
//         },
//         analytics: {},
//         cta: {
//           link: "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
//           type: "WEBLINK",
//         },
//       },
//       {
//         data: {
//           id: "32399",
//           name: "McDonald's",
//           cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
//           locality: "Kalina Artista",
//           areaName: "Santacruz East",
    
//           costForTwo: 40000,
//           costForTwoString: "400 for two",
//           deliveryTime: 17,
//           cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//           avgRating: 4.3,
//           feeDetails: {
//             restaurantId: "32399",
//             fees: [
//               {
//                 name: "BASE_DISTANCE",
//                 fee: 3900,
//               },
//               {
//                 name: "BASE_TIME",
//               },
//               {
//                 name: "ANCILLARY_SURGE_FEE",
//               },
//             ],
//             totalFee: 3900,
//           },
//           parentId: "630",
//           avgRatingString: "4.3",
//           totalRatingsString: "10K+",
//           sla: {
//             lastMileTravel: 1.5,
//             serviceability: "SERVICEABLE",
//             slaString: "17 mins",
//             lastMileTravelString: "1.5 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextCloseTime: "2023-11-30 03:00:00",
//             opened: true,
//           },
//           badges: {
//             textExtendedBadges: [
//               {
//                 iconId: "guiltfree/GF_Logo_android_3x",
//                 shortDescription: "options available",
//                 fontColor: "#7E808C",
//               },
//             ],
//           },
//           isOpen: true,
//           type: "F",
//           badgesV2: {
//             entityBadges: {
//               imageBased: {},
//               textBased: {},
//               textExtendedBadges: {
//                 badgeObject: [
//                   {
//                     attributes: {
//                       description: "",
//                       fontColor: "#7E808C",
//                       iconId: "guiltfree/GF_Logo_android_3x",
//                       shortDescription: "options available",
//                     },
//                   },
//                 ],
//               },
//             },
//           },
//           aggregatedDiscountInfoV3: {
//             header: "10% OFF",
//             subHeader: "ABOVE ₹1000",
//             discountTag: "FLAT DEAL",
//           },
//           differentiatedUi: {
//             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             differentiatedUiMediaDetails: {
//               mediaType: "ADS_MEDIA_ENUM_IMAGE",
//               lottie: {},
//               video: {},
//             },
//           },
//           reviewsSummary: {},
//           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           restaurantOfferPresentationInfo: {},
//         },
//         analytics: {},
//         cta: {
//           link: "https://www.swiggy.com/restaurants/mcdonalds-kalina-artista-santacruz-east-mumbai-32399",
//           type: "WEBLINK",
//         },
//       },
//       {
//         data: {
//           id: "82668",
//           name: "The Belgian Waffle Co.",
//           cloudinaryImageId: "846dab8cca3c56a482d7cbcda0dd0eb9",
//           locality: "Kalina",
//           areaName: "Santacruz East",
//           costForTwoString: "₹200 for two",
//           costForTwo: 20000,
//           deliveryTime: 32,
//           cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
//           avgRating: 4.3,
//           veg: true,
//           feeDetails: {
//             restaurantId: "82668",
//             fees: [
//               {
//                 name: "BASE_DISTANCE",
//                 fee: 3200,
//               },
//               {
//                 name: "BASE_TIME",
//               },
//               {
//                 name: "ANCILLARY_SURGE_FEE",
//               },
//             ],
//             totalFee: 3200,
//           },
//           parentId: "2233",
//           avgRatingString: "4.3",
//           totalRatingsString: "1K+",
//           sla: {
//             lastMileTravel: 1.5,
//             serviceability: "SERVICEABLE",
//             slaString: "32 mins",
//             lastMileTravelString: "1.5 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextCloseTime: "2023-11-30 04:00:00",
//             opened: true,
//           },
//           badges: {},
//           isOpen: true,
//           type: "F",
//           badgesV2: {
//             entityBadges: {
//               imageBased: {},
//               textBased: {},
//               textExtendedBadges: {},
//             },
//           },
//           aggregatedDiscountInfoV3: {
//             header: "40% OFF",
//             subHeader: "UPTO ₹80",
//           },
//           differentiatedUi: {
//             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             differentiatedUiMediaDetails: {
//               mediaType: "ADS_MEDIA_ENUM_IMAGE",
//               lottie: {},
//               video: {},
//             },
//           },
//           reviewsSummary: {},
//           displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           restaurantOfferPresentationInfo: {},
//         },
//         analytics: {},
//         cta: {
//           link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-kalina-santacruz-east-mumbai-82668",
//           type: "WEBLINK",
//         },
//       },
// ];


const Body =()=>{

    //UseState
    //Local State Variable - Super powerful variable
   // const [listOfRestaurants, setListOfRestaurant] = useState(resList);    //resList old data
   const [listOfRestaurants, setListOfRestaurant] = useState([]);   //resList is empty now

   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setSearchText]=useState("");

   //Whenever state variable update, react triggers a reconciliation cycle(re render the component) 
    console.log("Body rendered again and again");

    //Normal Js variable
    // let resList = [];

    //UseEffect
    //2 arguments- call back function and dependency array
    useEffect(() => {
        // console.log("useEffect rendered");
        fetchData();
    }, []);

    const fetchData = async () => {
       //  const data = await fetch(
       //  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       //  );
         
       // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
      // const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=");
       
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      
      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          // setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    };

    // console.log("Body rendered");

    //Conditioanal Rendering 
    // if(listOfRestaurants.length ===0){
    //    // return <h3>Loading.........</h3>;
    //   return <Shimmer/>
    // }


    //Ternary Condition
    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //Filter the restaurant cards and update the UI
                        //searchText
                        console.log(searchText);

                       const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                       // setListOfRestaurant(filteredRestaurant);
                       setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={
                    ()=>{
                        const filterList=listOfRestaurants.filter((res)=>res.info.avgRating > 4);

                        //console.log(filterList);
                        setListOfRestaurant(filterList);
                    }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}

            {/* <RestaurantCard resData={resObj} /> */}

            {/* <RestaurantCard resData={resList[0]}/>
            <RestaurantCard resData={resList[1]}/>
            <RestaurantCard resData={resList[2]}/> */}
           
             {/* resList.map((restaurant)=>( */}

           {/* listOfRestaurants.map((restaurant)=>( */}

            {filteredRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
           ))}
            </div>
        </div>
    );
  };

  export default Body;