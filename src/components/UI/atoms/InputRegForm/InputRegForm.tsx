import React, { InputHTMLAttributes } from "react";
import Button from "../Button/Button";
import "./InputRegForm.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mode?: string;
}

const InputRegForm: React.FC<InputProps> = ({ label, mode=null, ...rest }) => {
  if (mode === "reg-site"){
    return (
      <div className="Input">
        <label className="Label-Input-Site Label-Input-White">{label}</label>
        <input {...rest} className="Input-Input-Site Label-Input Label-Input-Black"/>
        <Button label="Seleccionar sitio" mode="reg-site" type="button"></Button>
      </div>
    );
  }
  if (mode === "reg-date"){
    return (
      <div className="Input">
        <label className="Label-Input Label-Input-White">{label + "inicio:"}</label>
        <input {...rest} className="Input-Input-Date Label-Input Label-Input-Black" name="fechaIni"/>
        <label className="Label-Input Label-Input-White-Date">{label + "fin:"}</label>
        <input {...rest} className="Input-Input-Date Label-Input Label-Input-Black" name="fechaFin"/>
      </div>
    );
  }
  return (
    <div className="Input">
      <label className="Label-Input Label-Input-White">{label}</label>
      <input {...rest} className="Input-Input Label-Input Label-Input-Black"/>
    </div>
  );
};

export default InputRegForm;