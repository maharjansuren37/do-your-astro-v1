import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './_css/index.css';
import RootLayout from "./layouts/RootLayouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Home from "./pages/Home";
import Astrophotography from "./pages/Astrophotography";
import Bookbindery from "./pages/Bookbindery";
import Contact from "./pages/Contact";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProvider from "./states/AuthProvider";

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/astrophotography" element={<Astrophotography />} />
                        <Route path="/bookbindery" element={<Bookbindery />} />
                        <Route path="/contact" element={<Contact /> } />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/admin" element={<AdminLayout />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>        
    )
}