import React from "react";

class UserClass extends React.Component{

constructor(props){
    super(props);

    this.state={
      name: "Himani Patil",
      email :"himani.patil29792@gmail.com"
        // count:0,
        // count2:2,
        // userInfo:{
        //     name: "Himani29",
        //     login:"",
        //     location: "Mumbai",
        // }
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
      // const {name,email}=this.props;
        const {name,email, count,count2}=this.state;

     // const {name, location}=this.state;

        console.log(this.props.name + "Child Render");

        return(
            <div className="user-card">
                {/* <h2>Name: {this.props.name}</h2> */}
                {/* <h1>Count: {this.state.count}</h1> */}
                {/* <h1>Class based component</h1> */}
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
                {/* <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 9403386226</h4> */}
               
                <div className="flex  justify-around flex-row">
        <div className="github  border border-white lg:w-2/6 sm:w-12  rounded-lg shadow-xl text-orange-600 font-bold p-4 my-10 transition ease-in-out delay-75 hover: -translate-y-1 hover:scale-105 duration-300">
          {/* <img src="{avatar_url}" /> */}
          <span className="flex flex-row items-center justify-center">
            <a href="https://github.com/Himanipatil29792" target="_blank">
            
              <i class="fa fa-github fa-2x m-2" aria-hidden="true"></i>

            </a>
            <a href="https://www.linkedin.com/in/himani-jayesh-patil-959465a0/" target="_blank">
           
              <i class="fa fa-linkedin-square fa-2x m-2" aria-hidden="true"></i>

            </a>
          </span>

          <h1 className="p-2"> Name: {name}</h1>
          <h2 className="p-2">Email: {email}</h2>
          <p className="p-4">
              I'm a passionate Front-End Developer with 6 years of experience in building responsive and interactive web 
              applications. Proficient in React.js, JavaScript, jQuery , HTML5, CSS3, and Bootstrap5.
              Specializes in creating responsive designs and user-friendly interfaces.
          </p>
        </div>

     
      </div>
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
