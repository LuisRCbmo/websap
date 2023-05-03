import React, { useState } from 'react';
import { Input, RadioGroup, Checkbox, Button } from 'components/atoms';

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
    domingo: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, apellido, horario, dias });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <Input label="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <RadioGroup
        label="Horario"
        options={[
          { value: '6-13', label: '6am - 1pm' },
          { value: '13-20', label: '1pm - 8pm' },
        ]}
        value={horario}
        onChange={(e) => setHorario(e.target.value)}
      />
      <Checkbox label="Lunes" checked={dias.lunes} onChange={(e) => setDias({ ...dias, lunes: e.target.checked })} />
      <Checkbox label="Martes" checked={dias.martes} onChange={(e) => setDias({ ...dias, martes: e.target.checked })} />
      <Checkbox label="Miércoles" checked={dias.miercoles} onChange={(e) => setDias({ ...dias, miercoles: e.target.checked })} />
      <Checkbox label="Jueves" checked={dias.jueves} onChange={(e) => setDias({ ...dias, jueves: e.target.checked })} />
      <Checkbox label="Viernes" checked={dias.viernes} onChange={(e) => setDias({ ...dias, viernes: e.target.checked })} />
      <Checkbox label="Sábado" checked={dias.sabado} onChange={(e) => setDias({ ...dias, sabado: e.target.checked })} />
      <Checkbox label="Domingo" checked={dias.domingo} onChange={(e) => setDias({ ...dias, domingo: e.target.checked })} />
      <Button type="submit">Confirmar</Button>
    </form>
  );
}

export default GuardiaForm;