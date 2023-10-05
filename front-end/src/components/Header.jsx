import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-2 h-16 bg-azul text-white md:text-black">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          title="imovel guide logo"
          className="w-28 h-12"
        />
      </div>
      <div className="flex gap-4">
        <span>Condomínios</span>
        <span>Fórum</span>
        <span>Guia</span>
        <span>Artigos</span>
        <span>Ferramentas</span>
      </div>
      <div className="flex gap-4 ml-48">
        <span>Cotar Imóvel</span>
        <span>Planos</span>
        <span>Entrar</span>
      </div>
      <div className="ml-6 border-2 border-white rounded-2xl p-1 pl-10 pr-10">
        <span>Cadastre-se</span>
      </div>
    </div>
  );
};

export default Header;
