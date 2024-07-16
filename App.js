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

const parent=React.createElement("div",{id:"parent"},
   [
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{}, "I am h1 tag"),
        React.createElement("h2",{}, "I am h2 tag")
    ]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{}, "I am h1 tag"),
        React.createElement("h2",{}, "I am h2 tag")
    ])
   ]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);