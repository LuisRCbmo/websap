import React, { useState } from 'react';
import PagarEfectivoButton from '../molecules/PagarEfectivoButton';
import PagoEfectivoForm from '../molecules/PagoEfectivoForm';

function CobroEfectivoSection({ onPagoEfectivo }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handlePagarEfectivoClick = () => {
    setMostrarFormulario(true);
  };

  const handlePagoEfectivoSubmit = (datosPago) => {
    onPagoEfectivo(datosPago);
    setMostrarFormulario(false);
  };

  return (
    <>
      {!mostrarFormulario && (
        <PagarEfectivoButton onClick={handlePagarEfectivoClick} />
      )}
      {mostrarFormulario && (
        <PagoEfectivoForm onSubmit={handlePagoEfectivoSubmit} />
      )}
    </>
  );
}

export default CobroEfectivoSection;
