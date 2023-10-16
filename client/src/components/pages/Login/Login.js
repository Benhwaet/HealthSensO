import React from "react";
import logo from "./O.png";
import "./login.css"
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const loginClick = () => navigate("/login");
    const registerClick = () => navigate("/register");

    return (
        <>
            <header style={{ backgroundColor: 'black', height: '150px', width: '100%', zIndex: '4', position: 'relative', bottom: '150px' }}></header>
            <div className="row" style={{ position: 'relative', bottom: '130px', height: "400px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px" }}>
                <div className="circle" onClick={registerClick}>
                    <h2 className="circleText" >
                        Register
                    </h2>
                </div>
                <img style={{ height: '500px', width: '500px' }} src={logo} alt="center page logo" />
                <div className="circle" onClick={loginClick}>
                    <h2 className="circleText">
                        Login
                    </h2>
                </div>
                <footer style={{ backgroundColor: 'black', height: '150px', width: '100%', zIndex: '4', position: 'relative', top: '50px' }}></footer>
            </div>
        </>
    )
}