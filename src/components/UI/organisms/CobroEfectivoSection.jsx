import React, { useState } from 'react';
import PagarEfectivoButton from '../molecules/PagarEfectivoButton';
import PagoEfectivoForm from '../molecules/PagoEfectivoForm';

function CobroEfectivoSection({ onPagoEfectivo }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handlePagarEfectivoClick = () => {
    if (window.confirm('¿Está seguro de pagar en efectivo?')) {
      setMostrarFormulario(true);
    }
  };

  const handlePagoEfectivoSubmit = (datosPago) => {
      onPagoEfectivo(datosPago);
    setMostrarFormulario(false);
    
  };

  const handleCancelarClick = () => {
    setMostrarFormulario(false);
  };

  return (
    <>
      {!mostrarFormulario && (
        <PagarEfectivoButton onClick={handlePagarEfectivoClick} />
      )}
      {mostrarFormulario && (
        <PagoEfectivoForm onSubmit={handlePagoEfectivoSubmit} onCancel={handleCancelarClick} />
      )}
    </>
  );
}


export default CobroEfectivoSection;
