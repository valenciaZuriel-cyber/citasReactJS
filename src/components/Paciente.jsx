import '../css/paciente.css';

const Paciente = () => {
    return(
        <article className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"></span>
            </p>
            <p className="paciente-fecha"></p>

            <div className="paciente-contenedor-botones">
                <button className="paciente-btn paciente-btn-editar">Editar</button>
                <button className="paciente-btn paciente-btn-eliminar">Eliminar</button>
            </div>
        </article>
    )
};

export default Paciente;