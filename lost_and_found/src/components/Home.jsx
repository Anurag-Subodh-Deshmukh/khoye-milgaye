import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="mainLanding"></div>
            <button type="button" onClick={() => navigate("/report")}>Report</button>
            <button type="button" onClick={() => navigate("/find")}>Find</button>
            <button type="button" onClick={() => navigate("/login")}>Login</button>
            <button type="button" onClick={() => navigate("/register")}>Register</button>
        </div>
    );
}

export default HomePage;