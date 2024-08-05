import React from "react";

class UserClass extends React.Component{

constructor(props){
    super(props);

    this.state={
        // count:0,
        // count2:2,
        userInfo:{
            name: "Himani29",
            location: "Jalgaon",
        }
    }
   // console.log(props);
    console.log(this.props.name + "Child Constructor");
}

async componentDidMount(){
    console.log(this.props.name + "Child ComponentDidMount");

   //API Call
   const data=await fetch("https://api.github.com/users/Himanipatil29792");
   const json=await data.json();

   this.setState({
    userInfo: json,
   });

   console.log(json);
}

componentDidUpdate(){
    console.log("Component Did Update");
}

render(){
      //  const {name,location}=this.props;
      //  const {count,count2}=this.state;

      const {name, location}=this.state;

        console.log(this.props.name + "Child Render");

        return(
            <div className="user-card">
                {/* <h2>Name: {this.props.name}</h2> */}
                {/* <h1>Count: {this.state.count}</h1> */}
                <h1>Class based component</h1>
                {/* <h1>Count: {count}</h1>
                <button onClick={()=>{

                    //Never update state variables directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2,
                    });
                }}>Incraese count</button>
                <h1>Count2: {count2}</h1> */}

                {/* <h2>Name: {this.state.name}</h2> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 9403386226</h4>
            </div>
        ); 
    }
}

export default UserClass;

/*
---Mounting----
-constructor (dummy)
-Render (dummy)
    <html Dummy>
    componentDidMount
    <API Call>
    <this.setState> -> State variable is updated

----Update-----
-render(API data)
-<html (new API data loaded)>
-ComponentDidUpdate
*/
