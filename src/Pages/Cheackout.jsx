import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { context } from "../Provider/Authprovider";

const Cheackout = () => {
    const service = useLoaderData()
    const { title, _id, img, price } = service
    const {user}=useContext(context)
    const  handleService=(e)=>{
        e.preventDefault()
        // console.log(user.email)
        const form=e.target;
        const name=form.name.value;
        const date=form.date.value;
        const number=form.number.value;
        const email=form.email.value;
        const msg=form.msg.value;

        const details={
            CustomerName:name,
            title,
            img,
            date,
            number,
            email,
            price,
            Massage:msg,
            Id: _id
        }
        fetch("http://localhost:5000/booking", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(details)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }


    return (

        <div>
            <p>Book: {title}</p>
            <form className="card-body" onSubmit={handleService}>
               <div className="grid grid-cols-2 gap-3">
               <div className="form-control" >
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <input type="tex" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number</span>
                    </label>
                    <input type="number" name="number" placeholder="Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                
               </div>
               
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Massage</span>
                    </label>
                    <input type="text" name="msg" placeholder="Your massage" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Cheackout;