// Formulario

import { useState, useEffect } from "react";
import '../css/formulario.css';


const Formulario = ({ modalVisible, setmodalVisible, pacientes, setPacientes}) => {
    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    

    /**
     * una variable que guarda el valor del state
     * funcion que modifica el state
     * value=state
     * .trim = borrar espacios en blanco
     * [...variable] = copea la informacion de el array anterior
     */

    const handleCita = (e) => {
        e.preventDefault();

        if([paciente.trim(), propietario.trim(), telefono.trim(), 
            correo.trim(), fechaAlta.trim(), sintomas.trim()].includes('')){
                console.log('Todos los campos son obligatorios');
                window.alert('Error: Todos los campos son obligatorios');
                return;
        }

        //Create an object with all values in the form
        const nuevoPaciente = {
            paciente,
            propietario,
            telefono,
            correo,
            fechaAlta,
            sintomas

        };

        nuevoPaciente.id = Date.now();
        console.log(nuevoPaciente);

        //Save all new records
        //state = add my object into the array

        setPacientes([...pacientes, nuevoPaciente]);
 
    }

    return(
        <div className="formulario-contenido">
            <h2 className="formulario-titulo">Nueva 
                <span className="formulario-titulo-bold"> Cita</span>
            </h2>
            <button
                className="formulario-btn-cancelar"
                onClick={() => { setmodalVisible(false) }}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span>
            </button>

            <form onSubmit={(e) => handleCita(e)}>
                <div className="formulario-campo">
                    <label
                    htmlFor="paciente"
                    className="formulario-label"
                    >Nombre Paciente</label>
                    <input
                    id="paciente"
                    type="text"
                    className="formulario-input"
                    placeholder="perrito Poppy"
                    value={paciente}
                    onChange={(e) => {setPaciente(e.target.value) }}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="propietario"
                    className="formulario-label"
                    >Nombre Propietario</label>
                    <input
                    id="propietario"
                    type="text"
                    className="formulario-input"
                    placeholder="Zuriel Valencia"
                    value={propietario}
                    onChange={(e) => {setPropietario(e.target.value) }}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="correo"
                    className="formulario-label"
                    >E-mail</label>
                    <input
                    id="correo"
                    type="email"
                    className="formulario-input"
                    placeholder="tilininsano@gmail.com"
                    value={correo}
                    onChange={(e) => {setCorreo(e.target.value) }}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="telefono"
                    className="formulario-label"
                    >Telefono</label>
                    <input
                    id="telefono"
                    type="tel"
                    className="formulario-input"
                    placeholder="123456789"
                    value={telefono}
                    onChange={(e) => {setTelefono(e.target.value) }}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="fechaAlta"
                    className="formulario-label"
                    >Fecha de ingreso</label>
                    <input
                    id="fechaAlta"
                    type="date"
                    className="formulario-input"
                    placeholder="14/05/2026"
                    value={fechaAlta}
                    onChange={(e) => {setFechaAlta(e.target.value) }}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                    htmlFor="sintomas"
                    className="formulario-label"
                    >Sintomas que presenta</label>
                    <textarea
                    id="sintomas"
                    className="formulario-input"
                    placeholder="Falta de apetito"
                    value={sintomas}
                    onChange={(e) => {setSintomas(e.target.value) }}
                    rows={4}
                    />
                </div>

                <button
                type="submit"
                className="formulario-btn-submit"
                >Agregar Paciente</button>
            </form>
        </div>

    );
};


export default Formulario;