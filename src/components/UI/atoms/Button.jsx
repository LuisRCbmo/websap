import React from 'react';
import './Button.css';

function Button({ children, onClick }) {
  return <button className='myButton' onClick={onClick}>{children}</button>;
}

export default Button;