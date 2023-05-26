import React from "react"
import FormLogin from "../../UI/organisms/formLogin/FormLogin"
import './loginStyle.css'
const Login=()=>{

    return(
        <div className="contentLogin">
            <div className="loginForm">
                <h1>Iniciar sesión</h1>
            <FormLogin></FormLogin>
            </div>
        </div>
    )
}
export default Login
