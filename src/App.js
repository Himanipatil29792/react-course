
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";



// const heading=React.createElement("h1",{id:"heading"},"Hello world! First React Program");

// console.log(heading);  //convert object

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/*
<div id="parant">
    <div id="child">
    <h1>I am h1 Tag</h1>
    <h2>I am h2 Tag</h2>
    </div>
     <div id="child2">
    <h1>I am h1 Tag</h1>
    <h2>I am h2 Tag</h2>
    </div>
</div>
*/

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{}, "I am h1 tag")
//     )
// );

// const parent=React.createElement("div",{id:"parent"},
//     [
//      React.createElement("div",{id:"child"},
//          [React.createElement("h1",{}, "This is the h1 heading"),
//          React.createElement("h2",{}, "I am h2 tag")
//      ]),
//      React.createElement("div",{id:"child2"},
//          [React.createElement("h1",{}, "I am h1 tag"),
//          React.createElement("h2",{}, "I am h2 tag")
//      ])
//     ]
//  );
 
//  const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);


//React.createElement => Object => HTMLElement(render)
// const heading=React.createElement("h1",{id:"heading"},"Hello world! First React Program");

// console.log(heading);  //convert object

//JSX = HTML like or XML like syntax

//JSX (transpiled before it reaches the JS) - Parcel -Babel

//JSX => Babel transpiled it to React.createElement => ReactElement -JS Object => HTMLElement (render)
// const jsxHeading=(
// <h1 id="heading" className="head" tabIndex="5">Namste React JSX</h1>
// );
// console.log(jsxHeading);

//Title Function
// const Title=()=>(
//     <h1 id="heading" className="head" tabIndex="5">Namste React Title Component</h1>
//     );

//     const elem=<span>Span React Element</span>;
    
    //Title Variable
    // const title=(
    //     <h1 id="heading" className="head" tabIndex="5">
    //     {elem} &
    //     Namste React Title Variable</h1>
    //     ); 

//React Functional Component
// const fn=()=>{
//     return true;
// }


// const fn2=()=>true;

// const HeadingComponent=()=>{
//     <h1>Namaste React Functional Component</h1>
// }

// const HeadingComponent=()=>(
//     <div id="container">
//     <Title/>   
//     {jsxHeading}
//     {title}
// <h1 className="heading">Namaste React Functional Component</h1>
// </div>
// );
//This is Component Composition in HeadingComponent inside rendering a Title Component




    

  // const resObj =
  //   {
  //     data: {
  //       id: "78036",
  //       name: "Burger King",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Central Plaza, Kalina",
  //       areaName: "Santacruz East",
  //       costForTwo: 35000,
  //       costForTwoString: "₹350 for two",
  //       deliveryTime: 24,
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.2,
  //       feeDetails: {
  //         restaurantId: "78036",
  //         fees: [
  //           {
  //             name: "BASE_DISTANCE",
  //             fee: 3200,
  //           },
  //           {
  //             name: "BASE_TIME",
  //           },
  //           {
  //             name: "ANCILLARY_SURGE_FEE",
  //           },
  //         ],
  //         totalFee: 3200,
  //       },
  //       parentId: "166",
  //       avgRatingString: "4.2",
  //       totalRatingsString: "10K+",
  //       sla: {
  //         lastMileTravel: 1.5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "24 mins",
  //         lastMileTravelString: "1.5 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2023-11-30 03:45:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "ITEMS",
  //         subHeader: "AT ₹129",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
  //       type: "WEBLINK",
  //     },
  //   };



  // not using keys (not acceptable) <<<<< index as key <<<<< Unique id (best practice)



  const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  };

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
       //Check : http://localhost:1234/restaurants/122
      }
    ],
    errorElement: <Error />
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
// root.render(heading);
// root.render(jsxHeading);
// root.render(<HeadingComponent/>);

root.render(<RouterProvider router={appRouter}/>);