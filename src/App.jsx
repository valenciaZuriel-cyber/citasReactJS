import { useState } from 'react';
import './css/main.css';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';

function App() {
  const [modalVisible, setmodalVisible] = useState(false);
  //Para pasar estados de un componente padre a u componente hijo 
  //se hace atraves de props
  const [pacientes, setPacientes] = useState([]);
  return (
    <main className="container">
      <h1 className='title'>
        Administrador de Citas <span className='title-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => setmodalVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>

       <Paciente/> 

      {modalVisible && (
          <div className='modal-overlay' role='dialog' arial-modal="true">
            <div className='modal-content'>
              <Formulario
              modalVisible={modalVisible}
              setmodalVisible={setmodalVisible}
              pacientes={pacientes}
              setPacientes={setPacientes}
              />
            </div>
        </div>
      )}
      
    </main>
  )
}

export default App