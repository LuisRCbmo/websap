import React from 'react';
import PageHorario from './components/pages/PageHorario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login/Login';
import SelectSite from './components/pages/SelectSite/SelectSite';
import PageCobro from './components/pages/PageCobro';
import ParkingManagement from './components/UI/organisms/SeccionManejoParqueo/ParkingManagement';
import RegistrationReserve from './components/pages/RegistrationReserve/RegistrationReserve';
import RegisterGuard from './components/UI/molecules/RegistrarGuardia/RegistrarGuardia';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/horario" element={ <PageHorario /> }/>
      <Route path="/login" element={ <Login /> }/>
      <Route path="/seleccion" element={ <SelectSite siteId={""}/> }/>
      <Route path="/cobro" element={ <PageCobro /> }/>
      <Route path="/manejoParqueo" element={ <ParkingManagement /> }/>
      <Route path="/registro" element={ <RegistrationReserve /> }/>
      <Route path="/registroGuardia" element={ <RegisterGuard /> }/>
    </Routes>
  </BrowserRouter>
  );
}
  
export default App;
