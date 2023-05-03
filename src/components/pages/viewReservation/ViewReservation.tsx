import React from 'react'
import FormView from '../../UI/organisms/formViewReservation/FormView';
import './viewReservation.css'
const ViewReservation =()=>{
    return(
        <div className='contentViweRes'>
            <div className='ContentFormView'>
                <h1>Estado de reserva</h1>
                <FormView></FormView>
            </div>
        </div>
    )
};
export default ViewReservation