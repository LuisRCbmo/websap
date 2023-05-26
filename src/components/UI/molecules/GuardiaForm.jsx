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
        <Checkbox label="Lun" checked={dias.lunes} onChange={(e) => setDias({ ...dias, lunes: e.target.checked })} />
        <Checkbox label="Mar" checked={dias.martes} onChange={(e) => setDias({ ...dias, martes: e.target.checked })} />
        <Checkbox label="Mie" checked={dias.miercoles} onChange={(e) => setDias({ ...dias, miercoles: e.target.checked })} />
        <Checkbox label="Jue" checked={dias.jueves} onChange={(e) => setDias({ ...dias, jueves: e.target.checked })} />
        <Checkbox label="Vie" checked={dias.viernes} onChange={(e) => setDias({ ...dias, viernes: e.target.checked })} />
        <Checkbox label="Sab" checked={dias.sabado} onChange={(e) => setDias({ ...dias, sabado: e.target.checked })} />
        </div>
        <div className='boton'>
        <Button type="submit">Asignar</Button>
        </div>
      </form>
      </div>
    );
  }
  
  export default GuardiaForm;
  