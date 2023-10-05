import React from "react";
import { useState } from "react";
import Modal from "react-modal";

const Modal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function abrirModal() {
    setIsOpen(true);
  }
  function fecharModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={abrirModal}>Abrir Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={fecharModal}>
        <button onClick={fecharModal}>Fechar Modal</button>
      </Modal>
    </div>
  );
};

export default Modal;
