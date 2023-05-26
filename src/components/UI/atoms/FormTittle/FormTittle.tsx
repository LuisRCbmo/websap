import React from 'react';
import "./FormTittle.css";

type Props = {
  spanName: string;
}

const FormTittle: React.FC<Props> = ({ spanName }) => {
  return (
    <div className='FormTittle'>
      <span className='Span-Input'>{spanName}</span>
    </div>
  );
}

export default FormTittle;