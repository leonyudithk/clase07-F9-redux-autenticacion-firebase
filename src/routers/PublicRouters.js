import { Navigate } from "react-router-dom"

export const PublicRouters = ({isAuthenticated, children})=>{
    return !isAuthenticated
    ? children
    : <Navigate to="/*"/>

}