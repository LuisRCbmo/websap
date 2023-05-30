import React, { useState } from 'react';
import VehicleRegistration from '../../molecules/VehicleRegistration';
import './ParkingManagement.css';

function ParkingManagement() {
    const [vehicleRecords, setVehicleRecords] = useState([]);
  
    const handleRegisterVehicle = (matricula) => {
      const currentTime = new Date().toLocaleTimeString();
      const newRecord = { cliente: 'Oliver', matricula, horaIngreso: currentTime };
      setVehicleRecords([...vehicleRecords, newRecord]);
    };
  
    return (
      <div className='tablaParqueo'>
        <h1>Registros ingreso de clientes</h1>
        <div className='todo'>
        <VehicleRegistration onRegister={handleRegisterVehicle} />
        <div className='tablita'>
        <h2 className='clientes'>Clientes usando parqueo</h2>
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
        </div>
      </div>
    );
  }
  export default ParkingManagement;