import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";

const OpenImageModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function abrirModal() {
    setIsOpen(true);
  }
  function fecharModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        onClick={abrirModal}
        className="flex justify-center items-center w-96 h-12 border-solid border-2 border-laranja rounded-lg bg-laranja my-8 text-white"
      >
        <h2 className="uppercase">Abrir imagem no Modal</h2>
      </button>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <button onClick={fecharModal}>X</button>
        <img
          src="casa.jpg"
          alt="casa"
          title="imagem casa"
          className="rounded-lg"
        />
      </ReactModal>
    </div>
  );
};

export default OpenImageModal;
