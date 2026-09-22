import { useState } from 'react';
import './css/main.css';
import Formulario from './components/Formulario';

function App() {
  const [modalVisible, setmodalVisible] = useState(false);
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

      {modalVisible && (
          <div className='modal-overlay' role='dialog' arial-modal="true">
            <div className='modal-content'>
              <Formulario/>
            </div>
        </div>
      )}
      
    </main>
  )
}

export default App