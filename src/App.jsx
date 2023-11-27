import { useState } from 'react';

import Header from './components/Header';
import Modal from './components/Modal';
import PlusIcon from './assets/img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [showedModal, setShowedModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleOpenModal = () => {
    setShowedModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const handleCloseModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setShowedModal(false);
    }, 500);
  }

  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img 
            src={PlusIcon} 
            alt="newExpenseIcon" 
            onClick={handleOpenModal}
          />
        </div>
      )}

      {showedModal && (
        <Modal 
          animateModal={animateModal}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  )
}

export default App
