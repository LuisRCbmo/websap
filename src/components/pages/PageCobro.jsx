
import CobroEfectivoSection from '../UI/organisms/CobroEfectivo/CobroEfectivo';

function PageCobro() {
    

    const handlePagoEfectivo = (monto) => {
      
      // Agregar aquí la lógica para actualizar la base de datos
    };
  
    return (
      <div>
        <CobroEfectivoSection onPagoEfectivo={handlePagoEfectivo} />
      </div>
    );
  }

export default PageCobro;