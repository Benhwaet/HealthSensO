import React from "react";
import LoginForm from "../../Forms/LoginForm";
import logo from "./O.png";
import "./circle.css";
import "./login.css"
import { useNavigate } from "react-router-dom";


export default function UserLogin() {
    const navigate = useNavigate();
    const loginClick = () => navigate("/home");
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
                        <LoginForm/>
                    </h2>
                </div>

            </div>
        </>
    )
}