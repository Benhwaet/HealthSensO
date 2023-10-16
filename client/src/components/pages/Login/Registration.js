import React from "react";
import RegisterForm from "../../Forms/RegisterForm";
import logo from "./O.png";
import "./login.css"
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();
    const loginClick = () => navigate("/login");

    return (
        <>
            <header style={{ backgroundColor: 'black', height: '150px', width: '100%', zIndex: '4', position: 'relative', bottom: '150px' }}></header>
            <div className="row" style={{ position: 'relative', bottom: '130px', height: "400px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px" }}>
                <div className="circle2">
                        <RegisterForm/>
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