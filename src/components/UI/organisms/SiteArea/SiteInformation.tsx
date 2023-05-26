import React from 'react';
import "./siteStyle.css"

const SiteInformation = () => {
    return(
        <div className="siteInformation">
            <table>
            <tr>
                    <td className="site redSite" data-site="A1" colSpan ={1}></td>  
                    <td className="site black" data-site="A2" colSpan ={3}>No disponible</td>  
                    <td className="site whiteSite" data-site="A3" colSpan ={1}></td>  
                    <td className="site black" data-site="A4" colSpan ={3}>Disponible</td>  
            </tr>
            </table>
        </div>
    )

}
export default SiteInformation