import '../css/paciente.css';

const Paciente = ({ setModalVisible, pacientes, paciente, eliminarPaciente, editarPaciente }) => {
    // Los parametros son pequenos lugares que se van acomodando dependiendo del valor de la variable 
    // Los parametros son pasados por props desde el componente padre (App.jsx)

    const handleEditar = () => {
        // Abrir el modal cuando se da click
        setModalVisible(true);
        // setModalVisible es una funcion que recibe un valor y cambia el estado de la variable modalVisible
        editarPaciente(paciente.id);
        // En console.log mostrar el array de pacientes
        console.log(pacientes);
        // Los parametros son etiquetas que esperan recibir un estado para poder mostrar el valor de la variable
    };
    const handleEliminar = () => {
        // Es un manejador de eventos (event handler) que se ejecuta al interactuar con el botón.
        // Sirve para encapsular la lógica previa (como pedir confirmación) antes de llamar a la función eliminarPaciente.
        eliminarPaciente(paciente.id);
    }


    return (
        <article className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"> {paciente.paciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar()}
                    // onClick es el Trigger que se encarga de ejecutar la funcion handleEditar
                >Editar</button>
                <button
                    className="paciente-btn paciente-btn-eliminar"
                    onClick={() => handleEliminar()}
                >Eliminar</button>
            </div>
        </article>
    );
};

export default Paciente;