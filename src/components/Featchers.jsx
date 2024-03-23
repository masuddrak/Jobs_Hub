import { useEffect } from "react";
import { useState } from "react";
import Featcher from "./Featcher";

const Featchers = () => {
    const [featchers,setFeatchers]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setFeatchers(data))
    },[])
    // console.log(featchers)
    return (
        <div className="grid grid-cols-2 gap-10">
            {
                featchers.map(feacher=><Featcher key={feacher.id} feacher={feacher}></Featcher>)
            }
        </div>
    );
};

export default Featchers;