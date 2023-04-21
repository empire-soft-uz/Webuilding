import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "./app-router";

const ProtectedRoute = ({ children }: any) => {
    const navigate = useNavigate()
    return (
        children
    )
};


export default ProtectedRoute