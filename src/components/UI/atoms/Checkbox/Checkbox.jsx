import React from 'react';
import './Checkbox.css';

function Checkbox({ label, checked, onChange }) {
    return (
      <div className='check'>
        <input className='icheck' type="checkbox" checked={checked} onChange={onChange} />
        <label>{label}</label>
      </div>
    );
  }
  export default Checkbox;