
import React from "react";
import ReactDOM from "react-dom/client"

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
const jsxHeading=(
<h1 id="heading" className="head" tabIndex="5">Namste React JSX</h1>
);
// console.log(jsxHeading);

//Title Function
const Title=()=>(
    <h1 id="heading" className="head" tabIndex="5">Namste React Title Component</h1>
    );

    const elem=<span>Span React Element</span>;
    
    //Title Variable
    const title=(
        <h1 id="heading" className="head" tabIndex="5">
        {elem} &
        Namste React Title Variable</h1>
        ); 

//React Functional Component
// const fn=()=>{
//     return true;
// }


// const fn2=()=>true;

// const HeadingComponent=()=>{
//     <h1>Namaste React Functional Component</h1>
// }

const HeadingComponent=()=>(
    <div id="container">
    <Title/>   
    {jsxHeading}
    {title}
<h1 className="heading">Namaste React Functional Component</h1>
</div>
);
//This is Component Composition in HeadingComponent inside rendering a Title Component

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent/>);