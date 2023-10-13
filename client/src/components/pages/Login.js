import { useState } from "react";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
import logo from "../../images/O.png";
import "../circles/circle.css";
import "../../index.css"

//import { useNavigate } from "react-router-dom";



export default function Login() {
    const [isActive, setIsActive] = useState(false);

    let regForm = "hidden circleText";
    let regTitle = "visible circleText";

    if (isActive === true) {
        regForm = "visible circleText";
        regTitle = "hidden circleText";
    }
    

    return (
        <div className="row" style={{ height: "600px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px" }}>
            <div className="circle">
                <h2 className={regTitle} onClick={() => setIsActive(false)} isActive={true}>
                Register
            </h2>
            </div>
            <div className="circle" > 
                <h2 className={regForm}>
                <RegisterForm />
            </h2>
            </div>

            <img className="col-6 col-md-4" src={logo} alt="center page logo" />

            <div className="circle {logTitle}"><h2 className="circleText"
                onClick={() => setIsActive(false)} isActive={true}>
                Login
            </h2>
            </div>
            <div className="circle {logForm} hidden"><h2 className="circleText"
                isActive={false}>
                <LoginForm />
            </h2>
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