// Formulario 
import { useState, useEffect } from "react";
import '../css/formulario.css';

/**
 * Combina todo en uno solo, se puede ejecutar codigo antes, durante y despues de usar el estado...
 * 
 */

const Formulario = ({ modalVisible, setModalVisible, pacientes, setPacientes, pacienteEditado, setPacienteEditado }) => {
    // 1ra parte = Variable, valor, state // Variable que contiene el valor del state, funcion que modifica el state
    // 2da parte = funcion que modifica el valor, variable, state (), lo modifica completo
    const [paciente, setPaciente] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [idPaciente, setidPaciente] = useState('');

    useEffect(() => {
        console.log(pacienteEditado)
        console.log(Object.keys(pacienteEditado))//No muta los keys los convierte en un array
        console.log(Object.keys(pacienteEditado).length)
        if(Object.keys(pacienteEditado).length > 0){
            setPaciente(pacienteEditado.paciente);
            setNombrePropietario(pacienteEditado.nombrePropietario);
            setCorreo(pacienteEditado.correo);
            setTelefono(pacienteEditado.telefono);
            setFechaAlta(pacienteEditado.fechaAlta);
            setSintomas(pacienteEditado.sintomas);
            setidPaciente(pacienteEditado.id);
        }

    },[]);//Dependencias(se ponen estados) cada que se ejecute un cambio se estara ejecutando al mismo tiempo el useEffect

    const resetFormulario = () => {
        setPaciente('');
        setNombrePropietario('');
        setCorreo('');
        setTelefono('');
        setFechaAlta('');
        setSintomas('');
    }

    const cleanForm = () => {
        resetFormulario();
        setModalVisible(false);
        setPacienteEditado({});
    }


    const handleCancelar = () => {
        cleanForm();
    }


    const handleCita = (e) => {
        e.preventDefault();
        if ([paciente.trim(), nombrePropietario.trim(), correo.trim(), telefono.trim(), fechaAlta, sintomas.trim()].includes('')) {
            window.alert('Error: Todos los campos son obligatorios');
            return;
        }

        // Create an object with all values in the form
        const nuevoPaciente = {
            paciente,
            nombrePropietario,
            telefono,
            correo,
            fechaAlta,
            sintomas
        };

        if(pacienteEditado.id){
            //Si ya tiene id
           const nuevosPacientes = pacientes.map((paciente) => {
                if (paciente.id === pacienteEditado.id){
                    nuevoPaciente.id = paciente.id;
                    return nuevoPaciente;
                }else{
                    return paciente;
                }
            });
            setPacientes(nuevosPacientes);
        } else{
            //si no tiene id
            nuevoPaciente.id = Date.now();
            //save all new records
            // Usa el operador spread (...) para copiar los pacientes previos sin mutar el arreglo original y agrega el nuevoPaciente al final
            setPacientes([...pacientes, nuevoPaciente]);
            //state = add my object into the array
        }

        cleanForm();
    }
/*Todos los eventos y triggers empiezan con "on"*/
    return (
        <div className="formulario-contenido">
            <h2 className="formulario-titulo">{idPaciente ? 'Editar' : 'Nueva'}
                <span className="formulario-titulo-bold"> Cita</span>
            </h2>
            <button 
                className="formulario-btn-cancelar" 
                onClick={() => handleCancelar()}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span>
            </button>
            <form onSubmit={handleCita}>
                <div className="formulario-campo">
                    <label htmlFor="paciente" className="formulario-label">Nombre Paciente</label>
                    <input id="paciente" type="text" className="formulario-input" placeholder="Perrito Poppy" value={paciente} onChange={(e) => { setPaciente(e.target.value) }} />
                </div>
                <div className="formulario-campo">
                    <label htmlFor="nombrePropietario" className="formulario-label">Nombre Propietario</label>
                    <input id="nombrePropietario" type="text" className="formulario-input" placeholder="Juan Perez" value={nombrePropietario} onChange={(e) => { setNombrePropietario(e.target.value) }} />
                </div>
                <div className="">
                    <label htmlFor="correo" className="formulario-label">Correo</label>
                    <input id="correo" type="email" className="formulario-input" placeholder="correo@email.com" value={correo} onChange={(e) => { setCorreo(e.target.value) }} />
                </div>
                <div className="">
                    <label htmlFor="telefono" className="formulario-label">Telefono</label>
                    <input id="telefono" type="tel" className="formulario-input" placeholder="1234567890" value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
                </div>
                <div className="">
                    <label htmlFor="fechaAlta" className="formulario-label">Fecha Alta</label>
                    <input id="fechaAlta" type="date" className="formulario-input" value={fechaAlta} onChange={(e) => { setFechaAlta(e.target.value) }} />
                </div>
                <div className="">
                    <label htmlFor="sintomas" className="formulario-label">Sintomas</label>
                    <textarea id="sintomas" className="formulario-input" placeholder="Fiebre" value={sintomas} onChange={(e) => { setSintomas(e.target.value) }} rows="4"></textarea>
                </div>

                <button type="submit" className="formulario-btn-submit">{idPaciente ? 'Editar' : 'Agregar'} Cita</button>
            </form>

        </div>
    );
};

export default Formulario