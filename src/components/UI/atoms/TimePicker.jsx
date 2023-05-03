import React from 'react';

function TimePicker({ label, value, onChange }) {
    return (
      <div>
        <label>{label}</label>
        <input type="time" value={value} onChange={onChange} />
      </div>
    );
  }
  export default TimePicker;