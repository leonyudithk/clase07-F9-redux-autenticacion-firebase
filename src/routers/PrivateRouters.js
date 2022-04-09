import { Navigate } from "react-router-dom";


export const PrivateRouters = ({isAuthenticated, children}) => {
    return isAuthenticated
      ?children
      : <Navigate to="/login"/>
   
};