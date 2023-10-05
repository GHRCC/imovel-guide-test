import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center  gap-2 h-20 bg-azul text-white  inset-x-0 bottom-0">
      <div className="flex gap-4 ml-24 grow">
        <span>Termos</span>
        <span>Contatos</span>
        <span>Sobre</span>
      </div>
      <div className="mr-24">
        <span>©Copyright 2022. Todos os direitos reservados.</span>
      </div>
      <div className="mr-24">
        <img
          src="logo.png"
          alt="logo"
          title="logo imovel guide"
          className="w-28 h-12"
        />
      </div>
    </div>
  );
};

export default Footer;
