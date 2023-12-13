import { useContext } from "react";
import { context } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoot = ({children}) => {
    const location= useLocation();

    const {user, loading}=useContext(context)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email) {
      return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/login"} replace></Navigate>
        </div>
    );
};

export default PrivetRoot;