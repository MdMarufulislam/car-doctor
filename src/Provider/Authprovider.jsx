import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.confige";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const auth = getAuth(app);
export const context=createContext();
const Authprovider = ({children}) => {
    const [user, setUser]=useState([])
    const [loading, setLodaing]= useState(true)
    
    const createUser=(email, pass)=>{
      return  createUserWithEmailAndPassword(auth, email, pass)
    }
    const signIn=(email, pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
        

    }
    const logOut=()=>{
        
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLodaing(false)

        })
        return ()=>{
            unsubscribe()

        }

    }, [])
    
   

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        
        <context.Provider value={authInfo}>
            {children}
        </context.Provider>
    );
};

export default Authprovider;