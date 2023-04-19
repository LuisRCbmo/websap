import React, { useState } from 'react';
import Button from '../atoms/Button';
import './PagoEfectivoForm.css';

function PagoEfectivoForm({ onSubmit, onCancel }) {
  const [cliente, setCliente] = useState('');
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ cliente, fecha, monto });
  };

  return (
    <div className='RegistroPagos'>
        <h1>Registro de Pagos</h1>
    <form onSubmit={handleSubmit}>
    <label>
      Cliente:
      <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} />
    </label><br />
    <label>
      Fecha:
      <input className='fechaLabel' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
    </label><br />
    <label>
      Monto:
      <input className='montoLabel' type="number" value={50} readOnly/>
    </label><br />
    <div className="form-buttons-container">
    <button className="miButton" onClick={() => window.confirm('¿Está seguro de cancelar el pago?')}>Cancelar</button>
    <Button type="submit" onClick={() => window.confirm('¿Está seguro de confirmar el pago?')}>Confirmar</Button>
    </div>
    </form>
    </div>
  );
}

export default PagoEfectivoForm;
