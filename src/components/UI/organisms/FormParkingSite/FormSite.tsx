import React from 'react';
import ButtonRed from '../../atoms/Buttons/ButtonRed';
import './formSiteStyle.css'
type Props = {
    id: string;
  }
const FormSite:React.FC<Props> = ({id}) => {
    return(
        <div className="contentFormSite ">
            <form>
                <label htmlFor="numberSite" className='labelSite'>Nº Sitio</label>
                <input type="text" id="inputSite" className="inputSite" placeholder={id}/>
                <ButtonRed text="Asignar"></ButtonRed>
            </form>
        </div>
    )

}
export default FormSite