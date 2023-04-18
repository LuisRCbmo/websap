import React from 'react';
import SiteArea from '../../UI/organisms/SiteArea/SiteArea';
import "./selectSiteStyle.css"
import FormSite from '../../UI/organisms/FormParkingSite/FormSite';
import 'w3-css/w3.css';
import SiteInformation from '../../UI/organisms/SiteArea/SiteInformation';

const SelectSite = () => {
    return(
        <div className="contentSelect w3-row">
            <h1>Seleccionar sitio de parqueo</h1>
            <div className='w3-col m9'><SiteArea></SiteArea></div>
            <div className='w3-col m3 formSite' ><FormSite></FormSite></div>
            <div><SiteInformation></SiteInformation></div>
        </div>
    )

}
export default SelectSite