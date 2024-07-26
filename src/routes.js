import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Users />} />
        </Routes>
    );
}

export default AppRoutes;