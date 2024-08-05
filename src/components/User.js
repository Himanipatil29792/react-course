import { useState } from "react";

const User=(props)=>{
    const [count]=useState(0);
    const [count2]=useState(3);

    const {name,location}=props; 
    return(
        <div className="user-card">
        <h1>Functioanl Component</h1>
            <h1>Count: {count}, Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: 9403386226</h4>
        </div>
    );
};

export default User;