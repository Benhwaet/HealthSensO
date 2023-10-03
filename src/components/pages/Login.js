import React from "react";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
import logo from "../../images/O.png";

export default function Login() {
    return (
        <div className="row" style={{display: "flex", alignItems: "center", marginTop: "50px", marginBottom: "50px"}}>
            <div className="col-6 col-md-4" style={{display: "flex", justifyContent: "center"}}><RegisterForm/></div>
            <img className="col-6 col-md-4" src={logo} alt="center page logo"/>
            <div className="col-6 col-md-4" style={{display: "flex", justifyContent: "center"}}><LoginForm/></div>
        </div>
    )
}