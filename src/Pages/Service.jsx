import { useState } from "react";
import Services from "../Layout/Services";
import { useEffect } from "react";
const Service = () => {
    const [service, setService]=useState([])
    useEffect(()=>{
        fetch("https://car-doctor-server-eta-ruddy.vercel.app/services")
        .then(res=>res.json())
        .then(data=>setService(data))

    }, [])
    return (
        <div>
            <div className="text-center ">
                <h1 className="text-[#FF3811] text-2xl font-bold ">Service</h1>

                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6 w-[717px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

               <div className="grid grid-cols-3 gap-4">
               {service.map(services=><Services
               key={services._id}
               services={services}
               ></Services>
                
                
                )}
               </div>

            </div>
            <div className="text-center">
            <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
        </div>
    );
};

export default Service;