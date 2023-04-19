
import CobroEfectivoSection from '../UI/organisms/CobroEfectivoSection';

function PageCobro() {
    

    const handlePagoEfectivo = (monto) => {
      
      // Agregar aquí la lógica para actualizar la base de datos
    };
  
    return (
      <div>
        <h1>Registro de Pagos</h1>
        <CobroEfectivoSection onPagoEfectivo={handlePagoEfectivo} />
      </div>
    );
  }

export default PageCobro;