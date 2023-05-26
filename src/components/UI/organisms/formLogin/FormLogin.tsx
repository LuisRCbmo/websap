import React from "react";
import './formLogin.css'
import 'w3-css/w3.css';
const FormLogin = () =>{
    return(
        <div className="contentFormLogin w3-display-container">
        <form action="">
            <div className="w3-bar inputBar">
            <label htmlFor="" className="user w3-left">Usuario</label>
            <input type="text" className="w3-right" />
            </div>
            
            <br />
            <div className="w3-bar inputBar">
            <label htmlFor="" className="user w3-left">Contraseña</label>
            <input type="password" className="w3-right" />
            </div>
            <br />
            <div className="buttonLogin"><button>Enviar</button></div>
        </form>
        </div>
    )
};

export default FormLogin