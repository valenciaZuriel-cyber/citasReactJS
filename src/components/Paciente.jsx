import '../css/paciente.css';


const Paciente = ({
    setmodalVisible,
    pacientes,
    paciente
}) => {
/**
 * Los parametros son etiquetas que esperan recibir un estado (o funcion)
 */
    const handleEditar = () => {
        // Abrir el modal cuando se de CLick
        setmodalVisible(true);
        // Mostrar el array de pacientes en console-log
       console.log(pacientes);
    }

    return(
        <article className="paciente-card" >
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre" > {paciente.paciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button 
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar()}>Editar</button>
                <button className="paciente-btn paciente-btn-eliminar">Eliminar</button>
            </div>
        </article>
    )
};

export default Paciente;