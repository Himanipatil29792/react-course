import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    //Check if its online or offline
const[onlineStatus, setOnlineStatus]=useState(true);

useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    });
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
},[]);

    //return boolean value
    return onlineStatus;
}

export default useOnlineStatus;