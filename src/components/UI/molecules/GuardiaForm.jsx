import React, { useState } from 'react';
import Input from '../atoms/Input';
import Checkbox from '../atoms/Checkbox';
import RadioGroup from '../atoms/RadioGroup';
import Button from '../atoms/Button';
import './GuardiaForm.css';

function GuardiaForm({ onSubmit }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [horario, setHorario] = useState('6-13');
    const [dias, setDias] = useState({
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: false,
      viernes: false,
      sabado: false,
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ nombre, apellido, horario, dias });
    };
  
    return (
      <div className='GuardiaHorario'>
        <h1>Asignar Horario a Guardia</h1>
      <form onSubmit={handleSubmit}>
        <label className='labeles'>Nombre :</label>
        <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label className='labeles'>Apellido :</label>
        <Input value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <div className='horario'>
        <label className='labeles'>Horario :</label>
        <RadioGroup className="radio"
          options={[
            { value: '6-13', label: '6am - 1pm' },
            { value: '13-20', label: '1pm - 8pm' },
          ]}
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        </div>
        <div className='dia'>
        <label className='labeles'>Dia:</label>
        <Checkbox label="Lunes" checked={dias.lunes} onChange={(e) => setDias({ ...dias, lunes: e.target.checked })} />
        <Checkbox label="Martes" checked={dias.martes} onChange={(e) => setDias({ ...dias, martes: e.target.checked })} />
        <Checkbox label="Miércoles" checked={dias.miercoles} onChange={(e) => setDias({ ...dias, miercoles: e.target.checked })} />
        <Checkbox label="Jueves" checked={dias.jueves} onChange={(e) => setDias({ ...dias, jueves: e.target.checked })} />
        <Checkbox label="Viernes" checked={dias.viernes} onChange={(e) => setDias({ ...dias, viernes: e.target.checked })} />
        <Checkbox label="Sábado" checked={dias.sabado} onChange={(e) => setDias({ ...dias, sabado: e.target.checked })} />
        </div>
        <Button type="submit">Asignar</Button>
      </form>
      </div>
    );
  }
  
  export default GuardiaForm;
  