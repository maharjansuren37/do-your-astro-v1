import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './_css/index.css';
import RootLayout from "./layouts/RootLayouts/RootLayout";
import Home from "./pages/Home";
import Astrophotography from "./pages/Astrophotography";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/astrophotography" element={<Astrophotography />} />
                </Route>
            </Routes>
        </Router>        
    )
}