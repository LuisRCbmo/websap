import React from 'react';
import ButtonRed from '../../atoms/Buttons/ButtonRed';
import './formSiteStyle.css'

const FormSite = () => {
    return(
        <div className="contentFormSite ">
            <form>
                <label htmlFor="numberSite" className='labelSite'>Nº Sitio</label>
                <input type="text" id="inputSite" className="inputSite"/>
                <ButtonRed text="Asignar"></ButtonRed>
            </form>
        </div>
    )

}
export default FormSite