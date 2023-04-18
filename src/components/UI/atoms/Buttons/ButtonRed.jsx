import React from 'react';
import "./buttonRedStyle.css"
const ButtonRed = (props) => {
    return(
        <div className="contentButtonRed">
            <button className='red'>
                {props.text}
            </button>
        </div>
    )

}
export default ButtonRed