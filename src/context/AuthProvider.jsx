import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading , setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfileUpdate = (userName) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: userName
        })

    }
    const logInUser = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
             
            if (currentUser) {
              
                setUser(currentUser)
                setLoading(false)
            }



            () => unsubscribe()
        })

    }, [loading])


    const authInfo = {
        user,
        createUser,
        setUser,
        userProfileUpdate,
        logOutUser,
        logInUser,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;