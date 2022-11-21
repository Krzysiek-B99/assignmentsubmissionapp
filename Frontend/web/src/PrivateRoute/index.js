import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";

//children to komponent "zamkniety" miedzy <PrivateRoute> np. <Dashboard>
const PrivateRoute = ({children}) => {
    const [jwt,setJwt] = useLocalState("","jwt");
    return jwt ? children : <Navigate to ="/login" />;
};

export default PrivateRoute;