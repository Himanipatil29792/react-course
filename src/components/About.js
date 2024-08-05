import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


// About component convert class based componnent
// class About extends React.Component{}

class About extends Component{
    constructor(props){
        super(props);
        
       // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent ComponentDidMount");
    }

    render(){

        // console.log("Parent Render");

        return(
            <div>
                <h1>About Page</h1>
                <UserClass name={"First class props"} location={"Mumbai class"} />
                {/* <UserClass name={"Second class props"} location={"Mumbai class"} />
                <UserClass name={"Third class props"} location={"Mumbai class"} /> */}
            </div>
        )
    }
}

// const About=()=>{
//     return (
//         <div>
//             <h1>About Page</h1>
//             <User name={"Himani Patil function props"} location={"Domivali props"} />
//             <UserClass name={"Himani Patil class props"} location={"Mumbai class"} />
//         </div>
//     );
// }

export default About;

/*
-Parent Constructor
-Parent Render
    
    -First Constructor
    -First Render

    -Second constructor
    -Second Render

    -third constructor
    -third Render

    <DOM UPDATED - IN SINGLE BATCH
    -First ComponentDidMount
    -Second ComponentDidMount
    -Third ComponentDidMount

-Parent ComponentDidMount
*/