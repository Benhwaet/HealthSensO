import { useState } from "react";
import RegisterForm from "../Form/RegisterForm";
//import LoginForm from "../Form/LoginForm";
import logo from "../../images/O.png";
import "../circles/circle.css";
import "../../index.css"

//import { useNavigate } from "react-router-dom";



export default function Login() {
    const [elementVisible, setElementVisible] = useState(false);


    return (
        <>
        <header style={{ backgroundColor: 'black', height: '150px', width: '100%', zIndex: '4', position: 'relative', bottom: '150px'}}></header>
        <div className="row" style={{position: 'relative', bottom: '130px', height: "400px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px" }}>
            <div className="circle" onClick={() => setElementVisible(!elementVisible)}>
                <h2 className="circleText" >
                    Register
                </h2>
                {elementVisible ? (
                    <div className="circleText">
                        <RegisterForm />
                    </div>) : null}
            </div>


            <img style={{ height: '500px', width: '500px' }} src={logo} alt="center page logo" />

    
                <div className="circle">
                    <h2 className="circleText" onClick={() => setElementVisible(!elementVisible)}>
                        Login
                    </h2>
                    {/* <div className="circleText">
                        <LoginForm />
                    </div> */}
                </div>
            </div>
            </>
    )
}


// export default function Login() {
//     const navigate = useNavigate();
//   const loginClick = () => navigate("/login");
//   const registerClick = () => navigate("/register");

//     return (
//<div className="row" style={{height: "600px", display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: "50px", marginBottom: "50px"}}>
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