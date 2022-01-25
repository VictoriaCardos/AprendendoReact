import React, { useState } from 'react'
import Modal from 'react-modal'

const UsingModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0,0,0,0.5)'
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>MODAL ABERTO</h2>
        <button onClick={closeModal}>Fechar</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  )
}

export default UsingModal
