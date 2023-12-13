import { useContext, useEffect, useState } from "react";
import { context } from "../Provider/Authprovider";
import TableRow from "./TableRow";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(context)
    const [Bookings, setBokkings] = useState([])
    const url = `https://car-doctor-server-eta-ruddy.vercel.app/booking?email=${user.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBokkings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBokkings(data))
    }, {})

    return (
        <div>
            <h1>My Bookings: {Bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                       
                        {Bookings.map(booking=><TableRow 
                        key={booking._id}
                        booking={booking}
                        ></TableRow>)}
                       
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default Bookings;