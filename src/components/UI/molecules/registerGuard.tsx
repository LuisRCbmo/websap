import React from 'react'
import './registerGuard.css'
import WhiteButton from '../atoms/whiteButton'

const registerGuard = () => {
  return (
    <div className="grid-container-1">
            <div className="item1">
                <p>Creación cuenta guardia </p>
            </div>
        <div className="item2 grid-container-2">
            <div className="item21">
            <form id="form1">
            <div className='guard-register-item'>
                <label className='guard-register-label'>Nombre:</label>
                <input className='guard-register-input'  type='text'></input>
            </div>
            <div className='guard-register-item'>
                <label className='guard-register-label'>Apellidos:</label>
                <input className='guard-register-input' type='text'></input>
            </div>
            <div className='guard-register-item'>
                <label className='guard-register-label'>CI:</label>
                <input className='guard-register-input'  type='text'></input>
            </div>
            <div className='guard-register-item'>
                <label className='guard-register-label'>Correo electronico:</label>
                <input className='guard-register-input'  type='text'></input>
            </div>
            <div className='guard-register-item'>
                <label className='guard-register-label'>Numero celular:</label>
                <input className='guard-register-input'  type='text'></input>
            </div>
            </form>
            </div>
            <div className="item22 grid-container-3">
                <div className="item221">
                    <WhiteButton buttonText='Canceltar'></WhiteButton>
                </div>
                <div className="item222">
                    <WhiteButton buttonText='Registrar'></WhiteButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default registerGuard