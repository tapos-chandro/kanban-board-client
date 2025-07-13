import { Navigate, replace } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {

    const {user, loading} = useAuth()

    if(loading){
        return <p className="loading">Loading is running...</p>
    }

    if(user.email){
        return children
    }


    return <Navigate to="/login" replace/>;
};

export default PrivetRoute;