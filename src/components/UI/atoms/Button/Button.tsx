import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  mode?: string;
}

const Button: React.FC<ButtonProps> = ({ label, mode= null, ...rest }) => {
  if(mode === "reg-site"){
    return(
      <button className="Reg-Button" {...rest}>
        {label}
      </button>
    )
  }
  return (
    <button className="Button" {...rest}>
      {label}
    </button>
  );
};

export default Button;