import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);
const googleProviders = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const googleSignIn = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProviders)
    }

    const registerUser = (email, password, photoUrl)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, photoUrl)
    }

    const loginUser = (email, password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setIsLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const subscribe =  onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser);
             setIsLoading(false)
         });
         return ()=>{
             return subscribe();
         }
     },[])

    const authInfo ={
        user,
        isLoading,
        googleSignIn,
        registerUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node
  };

export default AuthProviders;