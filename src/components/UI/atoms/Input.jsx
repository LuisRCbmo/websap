import React from 'react';
import './Input.css';
function Input({ label, value, onChange }) {
    return (
      <div className='name'>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
    );
  }

export default Input;
