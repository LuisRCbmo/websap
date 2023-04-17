import React, { useState, useEffect } from 'react';

function checkExpiredDate(billingdate:Date) {
  const today = new Date();
  const timeDiffInMs = billingdate.getTime() - today.getTime();
  const timeDiffInDays = Math.floor(timeDiffInMs / (1000 * 60 * 60 * 24));

  if (timeDiffInDays <= -2) {
    console.log('La fecha ha expirado');
  } else {
    console.log('La fecha aún no ha expirado');
  }
}

function App() {
  const [billingdate, setbillingdate] = useState(new Date('2023-04-17'));

  useEffect(() => {
    const interval = setInterval(() => {
      checkExpiredDate(billingdate);
    }, 1000);
    //86400000 milisegundos para monitorear cada 24 horas
    //1000 milisegundos para pruebas

    return () => clearInterval(interval);
  }, [billingdate]);

  return (
    <div>
      <p>Componente App</p>
    </div>
  );
}

export default App;
