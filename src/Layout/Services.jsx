import { Link } from "react-router-dom";
import person from "/public/assets/images/about_us/person.jpg";

const Services = ({services}) => {
    const {title, img, price, _id}=services;
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-left">{title}</h2>
                    <p className="text-red-800 text-left">Price: {price}</p>
                    <button className=""><Link to={`cheackout/${_id}`}>GO</Link></button>
                </div>
               
            </div>
        </div>
    );
};

export default Services;