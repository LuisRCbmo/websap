import React from 'react';
import "./buttonRedStyle.css"

type Props = {
    text: string;
  }
const ButtonRed: React.FC<Props> = ({ text }) => {
    return(
        <div className="contentButtonRed">
            <button className='red'>
                {text}
            </button>
        </div>
    )

}
export default ButtonRed