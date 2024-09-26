import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../states/AuthProvider";

export default function PrivateRoute() {
    const user = useAuth();

    if (!user.token) return (<Navigate to="/admin/login" />)

    return <Outlet />
}