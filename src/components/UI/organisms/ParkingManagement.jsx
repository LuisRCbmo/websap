import React, { useState } from 'react';
import VehicleRegistration from '../molecules/VehicleRegistration';

function ParkingManagement() {
    const [vehicleRecords, setVehicleRecords] = useState([]);
  
    const handleRegisterVehicle = (matricula) => {
      const currentTime = new Date().toLocaleTimeString();
      const newRecord = { cliente: 'Nombre del cliente', matricula, horaIngreso: currentTime };
      setVehicleRecords([...vehicleRecords, newRecord]);
    };
  
    return (
      <div className='tablaParqueo'>
        <h1>Registros ingreso de clientes</h1>
        <VehicleRegistration onRegister={handleRegisterVehicle} />
        <h2>Clientes usando parqueo</h2>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Matrícula</th>
              <th>Hora de Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {vehicleRecords.length === 0 ? (
              <tr>
                <td colSpan="3">No hay registros de vehículos</td>
              </tr>
            ) : (
              vehicleRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.cliente}</td>
                  <td>{record.matricula}</td>
                  <td>{record.horaIngreso}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
  export default ParkingManagement;