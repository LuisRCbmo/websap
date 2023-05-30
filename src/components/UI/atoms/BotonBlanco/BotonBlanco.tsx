import React, { useState, useEffect } from 'react'
import './BotonBlanco.css'


const WhiteButton = (props:any) => {
  const [text, setText] = useState("N/A");
  
  useEffect(() => {
    setText(props.buttonText)
  });

  return (
    <div className='whiteButton-body'>
      {text}
    </div>
  )
}

export default WhiteButton