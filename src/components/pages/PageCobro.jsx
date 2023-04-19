
import CobroEfectivoSection from '../UI/organisms/CobroEfectivoSection';

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