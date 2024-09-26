import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('site') || "");
    const navigate = useNavigate();

    const loginAction = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const resData = await res.json();

            if (resData) {
                setUser(resData.name);
                setToken(resData.token);
                localStorage.setItem("site", resData.token);
                navigate("/admin");
            } else {
                throw new Error(res.message);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/admin/login");
    }

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}