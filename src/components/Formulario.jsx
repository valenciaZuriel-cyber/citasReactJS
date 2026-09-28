// Formulario

import { useState, useEffect } from "react";
import '../css/formulario.css';


const Formulario = ({ modalVisible, setmodalVisible}) => {
    const [paciente, setPaciente] = useState('');
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

            <form>
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
            </form>
        </div>

    );
};


export default Formulario