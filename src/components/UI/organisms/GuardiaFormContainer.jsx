import { useState } from 'react';
import GuardiaForm from '../molecules/GuardiaForm';

function GuardiaFormContainer() {
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);

  const handleSubmit = async (data) => {
    // Aquí iría el código para guardar los datos en la base de datos
   
    setConfirmacionVisible(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setConfirmacionVisible(false);
  };

  return (
    <div>
      {confirmacionVisible && <p>Guardia asignada correctamente</p>}
      <GuardiaForm onSubmit={handleSubmit} />
      </div>
  );
}

export default GuardiaFormContainer;
