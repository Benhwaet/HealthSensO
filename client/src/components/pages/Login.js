import React from "react";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
import logo from "../../images/O.png";
import "../elements/circle.css"

// export default function Login() {
//     return (
//         <div className="row" style={{height: "600px", display: "flex", alignItems: "center", marginTop: "50px", marginBottom: "50px"}}>
//             <div className="col-6 col-md-4" style={{display: "flex", justifyContent: "center"}}><RegisterForm/></div>
//             <img className="col-6 col-md-4" src={logo} alt="center page logo"/>
//             <div className="col-6 col-md-4" style={{display: "flex", justifyContent: "center"}}><LoginForm/></div>
//         </div>
//     )
// }

export default function Login() {
    return (
        <div className="row" style={{height: "600px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px"}}>
            <div className="circle" onClick="">
                <h2 className="circleText">Register</h2>
                </div>
            <img className="col-6 col-md-4" src={logo} alt="center page logo"/>
            <div className="circle" onClick="">
                <h2 className="circleText">Login</h2>
                </div>
        </div>
    )
}