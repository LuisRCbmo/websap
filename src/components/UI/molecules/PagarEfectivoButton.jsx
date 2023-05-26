import React from 'react';
import Button from '../atoms/Button';


function PagarEfectivoButton({ onClick }) {
  return <Button className="myButton" onClick={onClick}>Pagar en efectivo</Button>;
}

export default PagarEfectivoButton;
