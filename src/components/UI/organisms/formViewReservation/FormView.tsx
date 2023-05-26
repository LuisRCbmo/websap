import React from "react";
import 'w3-css/w3.css';
import './formView.css'
const FormView = () =>{
    return(
        <div className="contentFormView">
            <form action="">
                <div className="w3-bar">
                    <label htmlFor="" className="w3-left">Nombre cliente</label>
                    <input type="text" className="w3-right" readOnly />
                </div>
                <div className="w3-bar">
                    <label htmlFor="" className="w3-left">Código SIS</label>
                    <input type="text" className="w3-right" readOnly/>
                </div>
                <div className="w3-bar">
                    <label htmlFor="" className="w3-left">Dirección de email</label>
                    <input type="text" className="w3-right" readOnly/>
                </div>
                <div className="w3-bar">
                    <label htmlFor="" className="w3-left">Matricula</label>
                    <input type="text" className="w3-right" readOnly/>
                </div>
                <div className="w3-bar">
                    <label htmlFor="" className="w3-left">Numeró de celular</label>
                    <input type="text" className="w3-right" readOnly/>
                </div>
                <div className="w3-bar">
                    <label htmlFor="" className="w3-left">Sitio de parqueo</label>
                    <input type="text" className="w3-right" readOnly/>
                </div>
                <div className="w3-row">
                    <div className="w3-col s8 fechas inicio">
                        <div className="w3-bar">
                            <label htmlFor="" className="w3-left">Fecha inicio</label>
                            <input type="text" className="w3-right" readOnly/>
                        </div>
                    </div>
                    <div className="w3-col s4 fechas">
                        <div className="w3-bar">
                            <label htmlFor="" className="w3-left">Fecha fin</label>
                            <input type="text" className="w3-right" readOnly/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};
export default FormView