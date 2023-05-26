import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './VehicleRegistration.css';
function VehicleRegistration({ onRegister }) {
    const [matricula, setMatricula] = useState('');
  
    const handleInputChange = (event) => {
      setMatricula(event.target.value);
    };
  
    const handleRegisterClick = () => {
      onRegister(matricula);
      setMatricula('');
    };
  
    return (
      <div className='user'>
        <h2>Usuario: Guardia</h2>
        <div className='cuadroAzul'>
            <h2>Ingresar matricula</h2>
        <div>
        <Input value={matricula} onChange={handleInputChange} />
        </div>
        <div>
        <Button onClick={handleRegisterClick}>Registrar</Button>
        </div>
        </div>
      </div>
    );
  }
  export default VehicleRegistration;