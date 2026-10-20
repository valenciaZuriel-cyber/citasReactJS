import { useState } from 'react';
import Formulario from './components/Formulario';
import './css/main.css';
import Paciente from './components/Paciente';
import './css/paciente.css';

function App() {
  // modalVisible - false al dar click sea true
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditado, setPacienteEditado] = useState({});
  const editarPaciente = (id) => {
    const pacienteEditado = pacientes.filter(paciente => paciente.id === id);
    console.log(pacienteEditado);
    console.log(pacienteEditado[0]);
    setPacienteEditado(pacienteEditado[0]);
  }
  // Para pasar estados de un componente padre a un hijo se usa props
  const eliminarPaciente = (id) => {
    const confirmar = window.confirm('¿Estas seguro de eliminar esta cita?');
    console.log(confirmar);
    if (confirmar) {
      const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id);
      // Filtra el arreglo creando uno nuevo que excluye al paciente con el id recibido (elimina el paciente)
      setPacientes(pacienteActualizados);
    }
  }
  
  return (
    <main className="container">
      <h1 className='titulo'>
        Administrador de Citas <span className='titulo-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => { setModalVisible(true) }}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>

      {pacientes.map((paciente) => (
        <Paciente 
          key={paciente.id} 
          paciente={paciente} 
          pacientes={pacientes} 
          setModalVisible={setModalVisible} 
          editarPaciente={editarPaciente} 
          eliminarPaciente={eliminarPaciente} 
        />
      ))}

      

      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal="true">
          <div className='modal-content'>
            <Formulario 
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              pacientes={pacientes}
              setPacientes={setPacientes}
              pacienteEditado={pacienteEditado}
              setPacienteEditado={setPacienteEditado}
              // Estas son props que se pasan al componente Formulario
              
            />
          </div>
        </div>
      )}

    </main>
  )
}

export default App