import React from 'react';
import "./siteStyle.css";
import $ from 'jquery';

    
    type Props = {
        setId: Function;
      }
const SiteArea:React.FC<Props> = ({setId}) => {
        var flag:boolean=false;
        
        function select_site(){
                
                $(".state-1").unbind("Click");
                $(".state-1").bind("click",function(e){
                        if(flag!=true){
                e.preventDefault();;
                $(this).addClass("taken");
                setId($(this).text())
                flag=true;
                        }
                });
        }

                
               
        
        
        $(document).ready(function () {
                
                select_site();
                // setInterval(__ace_left, 5000);
            
                //el contador de tiempo se ejecuta tras el cargado de los datos json
            });   
    return(
        <div className="parkingArea">
            <table>
            <tr>
                    <td className="site entry" data-site="" colSpan ={2} rowSpan={3}>Entrada</td>
                    <td className="site state-1" data-site="A1" colSpan ={1}>A 1</td>  
                    <td className="site state-1" data-site="A2" colSpan ={1}>A 2</td>  
                    <td className="site state-1" data-site="A3" colSpan ={1}>A 3</td>  
                    <td className="site state-1" data-site="A4" colSpan ={1}>A 4</td>  
                    <td className="site state-1" data-site="A5" colSpan ={1}>A 5</td>  
                    <td className="site state-1" data-site="A6" colSpan ={1}>A 6</td>  
                    <td className="site state-1" data-site="A7" colSpan ={1}>A 7</td>  
                    <td className="site state-1" data-site="A8" colSpan ={1}>A 8</td>  
                    <td className="site state-1" data-site="A9" colSpan ={1}>A 9</td>  
                    <td className="site state-1" data-site="A10" colSpan ={1}>A 10</td>  
                    <td className="site state-1" data-site="A11" colSpan ={1}>A 11</td>  
                    <td className="site state-1" data-site="A12" colSpan ={1}>A 12</td>  
            </tr>
            <tr>
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site state-1" data-site="B1" colSpan ={1}>B 1</td>  
            </tr>
            <tr>
                    <td className="site state-1" data-site="C1" colSpan ={1}>C 1</td>  
                    <td className="site state-1" data-site="C2" colSpan ={1}>C 2</td>  
                    <td className="site state-1" data-site="C3" colSpan ={1}>C 3</td>  
                    <td className="site state-1" data-site="C4" colSpan ={1}>C 4</td>  
                    <td className="site state-1" data-site="C5" colSpan ={1}>C 5</td>  
                    <td className="site state-1" data-site="C6" colSpan ={1}>C 6</td>  
                    <td className="site state-1" data-site="C7" colSpan ={1}>C 7</td>  
                    <td className="site state-1" data-site="C8" colSpan ={1}>C 8</td>  
                    <td className="site state-1" data-site="C9" colSpan ={1}>C 9</td>  
                    <td className="site state-1" data-site="C10" colSpan ={1}>C 10</td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site state-1" data-site="C11" colSpan ={1}>C 11</td>  
            </tr>
            <tr>
                    <td className="site entry" data-site="" colSpan ={2} rowSpan={3}>Salida</td>
                    <td className="site state-1" data-site="D1" colSpan ={1}>D 1</td>  
                    <td className="site state-1" data-site="D2" colSpan ={1}>D 2</td>  
                    <td className="site state-1" data-site="D3" colSpan ={1}>D 3</td>  
                    <td className="site state-1" data-site="D4" colSpan ={1}>D 4</td>  
                    <td className="site state-1" data-site="D5" colSpan ={1}>D 5</td>  
                    <td className="site state-1" data-site="D6" colSpan ={1}>D 6</td>  
                    <td className="site state-1" data-site="D7" colSpan ={1}>D 7</td>  
                    <td className="site state-1" data-site="D8" colSpan ={1}>D 8</td>  
                    <td className="site state-1" data-site="D9" colSpan ={1}>D 9</td>  
                    <td className="site state-1" data-site="D10" colSpan ={1}>D 10</td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site state-1" data-site="D11" colSpan ={1}>D 11</td>  
            </tr>
            <tr>
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site blank" data-site="" colSpan ={1}></td>  
                    <td className="site state-1" data-site="E1" colSpan ={1}>E 1</td>  
            </tr>
            <tr>
                    <td className="site state-1" data-site="F1" colSpan ={1}>F 1</td>  
                    <td className="site state-1" data-site="F2" colSpan ={1}>F 2</td>  
                    <td className="site state-1" data-site="F3" colSpan ={1}>F 3</td>  
                    <td className="site state-1" data-site="F4" colSpan ={1}>F 4</td>  
                    <td className="site state-1" data-site="F5" colSpan ={1}>F 5</td>  
                    <td className="site state-1" data-site="F6" colSpan ={1}>F 6</td>  
                    <td className="site state-1" data-site="F7" colSpan ={1}>F 7</td>  
                    <td className="site state-1" data-site="F8" colSpan ={1}>F 8</td>  
                    <td className="site state-1" data-site="F9" colSpan ={1}>F 9</td>  
                    <td className="site state-1" data-site="F10" colSpan ={1}>F 10</td>  
                    <td className="site state-1" data-site="F11" colSpan ={1}>F 11</td>  
                    <td className="site state-1" data-site="F12" colSpan ={1}>F 12</td>  
            </tr>
            </table>
        
        </div>
    )

}
export default SiteArea