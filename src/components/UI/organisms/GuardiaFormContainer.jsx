import { useState } from 'react';
import GuardiaForm from './GuardiaForm';

function GuardiaFormContainer() {
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);

  const handleSubmit = async (data) => {
    // Aquí iría el código para guardar los datos en la base de datos
    // Puedes utilizar una librería como Axios o fetch para enviar una petición al servidor

    // Mostramos el mensaje de confirmación
    setConfirmacionVisible(true);

    // Esperamos un segundo para ocultar el mensaje de confirmación
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Ocultamos el mensaje de confirmación
    setConfirmacionVisible(false);
  };

  return (
    <>
      {confirmacionVisible && <p>Guardia asignada correctamente</p>}
      <GuardiaForm onSubmit={handleSubmit} />
    </>
  );
}

export default GuardiaFormContainer;
