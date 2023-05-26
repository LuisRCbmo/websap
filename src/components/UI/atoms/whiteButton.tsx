import React, { useState, useEffect } from 'react'
import './whiteButton.css'


const whiteButton = (props:any) => {
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

export default whiteButton