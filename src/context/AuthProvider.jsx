import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from './../firebase/firebase.config';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfileUpdate = (userName) => {
        return updateProfile(auth.currentUser, {
            displayName: userName
        })

    }
    const logInUser = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }

            () => unsubscribe()
        })

    }, [])


    const authInfo = {
        user,
        createUser,
        setUser,
        userProfileUpdate,
        logOutUser,
        logInUser

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;