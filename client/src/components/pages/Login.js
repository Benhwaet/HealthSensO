import { useState } from "react";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
import logo from "../../images/O.png";
import "../circles/circle.css";
import "../../index.css"

//import { useNavigate } from "react-router-dom";



export default function Login() {
    const [isActive, setIsActive] = useState(false);

    let regTitle = "visible circleText";
    let logTitle = "visible circleText";
    let regForm = "hidden circleText";
    let logForm = "hidden circleText";

    if (isActive === true) {
        regForm = "visible circleText";
        regTitle = "hidden circleText";
        logForm = "visible circleText";
        logTitle = "hidden circleText";
    } else {
        regForm = "hidden circleText";
        regTitle = "visible circleText";
        logForm = "hidden circleText";
        logTitle = "visible circleText";
    }


    return (
        <div className="row" style={{ height: "600px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px" }}>
            <div className="circle">
                <h2 className={regTitle} onClick={() => setIsActive(false)} isActive={true}>
                    Register
                </h2>
            </div>
            <div className={regForm}>
                <RegisterForm />
            </div>

            <img style={{height: '500px', width: '500px'}} src={logo} alt="center page logo" />

            <div className="circle">
                <h2 className={logTitle} onClick={() => setIsActive(false)} isActive={true}>
                    Login
                </h2>
            </div>
            <div className={logForm}>
                <LoginForm />
            </div>
        </div>
    )
}


// export default function Login() {
//     const navigate = useNavigate();
//   const loginClick = () => navigate("/login");
//   const registerClick = () => navigate("/register");

//     return (
//         <div className="row" style={{height: "600px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px"}}>
//             <div style = {{
//                 width: "300px",
//                 height: "300px"
//              }} className="circle" onClick={registerClick}>
//                 <h2 className="circleText">Register</h2>
//                 </div>
//             <img className="col-6 col-md-4" src={logo} alt="center page logo"/>
//             <div style = {{
//                 width: "300px",
//                 height: "300px"
//              }} className="circle" onClick={loginClick}>
//                 <h2 className="circleText">Login</h2>
//                 </div>
//         </div>
//     )
// }