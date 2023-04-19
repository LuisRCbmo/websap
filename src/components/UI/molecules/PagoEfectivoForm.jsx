import React, { useState } from 'react';
import Button from '../atoms/Button';

function PagoEfectivoForm({ onSubmit }) {
  const [cliente, setCliente] = useState('');
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ cliente, fecha, monto });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cliente:
        <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} />
      </label><br />
      <label>
        Fecha:
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </label><br />
      <label>
        Monto:
        <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      </label><br />
      <Button type="submit">Realizar Pago</Button>
    </form>
  );
}

export default PagoEfectivoForm;
