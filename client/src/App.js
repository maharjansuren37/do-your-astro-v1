import React from "react";
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './css/index.css';
import RootLayout from "./layouts/RootLayouts/RootLayout";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />} />
            </Routes>
        </Router>        
    )
}