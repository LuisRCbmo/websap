import React, { useState } from "react";
import Input from "../../atoms/Input/Input"
import Button from "../../atoms/Button/Button";
//import { postSite } from "../../atoms/Database/queries";
import "./RegistrationForm.css";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    codSIS: 0,
    email: "",
    matricula: "",
    telefono: 0,
    sitio: "",
    fechaIni: "",
    fechaFin: ""
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    codSIS: false,
    email: false,
    matricula: false,
    telefono: false,
    sitio: false,
    fechaIni: false,
    fechaFin: false
  });
  const validateFormData = () => {
    let errors = {
      name: false,
      codSIS: false,
      email: false,
      matricula: false,
      telefono: false,
      sitio: false,
      fechaIni: false,
      fechaFin: false
    };
    if (formData.name.trim().length < 3) {
      errors.name = true;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = true;
    }
    const matriculaRegex = /^(\d{4}[- ]\w{3}|\d{7})$/;
    if (!matriculaRegex.test(formData.matricula)) {
      errors.matricula = true;
    }
    const codSisRegex = /^\d{9}$/;
    if (!codSisRegex.test("" + formData.codSIS)) {
      errors.codSIS = true;
    }
    if (formData.telefono < 60000000 || formData.telefono > 79999999){
      
    }
    setFormErrors(errors);
    return !errors.name && !errors.email && !errors.codSIS && !errors.matricula && !errors.telefono && !errors.sitio;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //postSite(1, 1, 1, 4, new Date('2023-04-15'));
  };
  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="RegistrationForm" onSubmit={handleSubmit}>
      <Input label="Nombre cliente:" type="text" name="name" value={formData.name} onChange={(event) =>
        setFormData({ ...formData, name: event.target.value })
      } required />
      <Input label="Codigo SIS:" type="number" name="codSIS" value={formData.codSIS} onChange={(event) =>
        setFormData({ ...formData, codSIS: parseInt(event.target.value) })
      } required />
      <Input label="Direccion de email:" type="email" name="email" value={formData.email} onChange={(event) =>
        setFormData({ ...formData, email: event.target.value })
      } required />
      <Input label="Matricula:" type="text" name="matricula" value={formData.matricula} onChange={(event) =>
        setFormData({ ...formData, matricula: event.target.value })
      } required />
      <Input label="Numero de celular:" type="number" name="telefono" value={formData.telefono} onChange={(event) =>
        setFormData({ ...formData, telefono: parseInt(event.target.value) })
      } required />
      <Input label="Asignar sitio:" mode="reg-site" type="text" name="sitio" value={formData.sitio} onChange={(event) =>
        setFormData({ ...formData, sitio: event.target.value })
      } required />
      <Input label="Fecha " mode="reg-date" type="date" required />
      <Button label="Cancelar" onClick={handleCancel} />
      <Button label="Registrar" type="submit" />
    </form>
  );
};

export default RegistrationForm;