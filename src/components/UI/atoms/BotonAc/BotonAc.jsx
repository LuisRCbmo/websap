/*
import './Button.css';
function Button({ onClick, children }) {
  return <button  onClick={onClick}>{children}</button>;
}
export default Button;
*/
import React from 'react';
import './BotonAc.css';

function Button({ children, onClick }) {
    return (
      <button className='myButton' onClick={onClick}>
        {children}
      </button>
    );
  }


/*return <button className='myButton' onClick={onClick}>{children}</button>;*/

export default Button;

