import React from "react";
import RegistrationForm from "../../molecules/RegistrationForm/RegistrationForm";
import FormTittle from "../../atoms/FormTittle/FormTittle";
import "./RegistrationReserve.css";

const RegistrationReserve: React.FC = () => {

  return (
    <div className="RegistrationReserve">
      <FormTittle spanName="Registrar datos de la reserva"></FormTittle>
      <RegistrationForm></RegistrationForm>
    </div>
  );
};

export default RegistrationReserve;