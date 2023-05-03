import React from 'react';
import './RadioGroup.css';
function RadioGroup({ label, options, value, onChange }) {
    return (
      <div className='radio'>
        <label>{label}</label>
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }
  export default RadioGroup;