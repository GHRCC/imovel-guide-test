import React from "react";
import Link from "./Link";
import OutlineButton from "./OutlineButton";

const Header = () => {
  return (
    <div className="flex items-center justify-around gap-2 h-16 bg-azul text-white  px-16">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          title="imovel guide logo"
          className="w-28 h-12"
        />
      </div>
      <div className="flex gap-4 grow">
        <Link href="/condominio">Condomínio</Link>
        <span>Fórum</span>
        <span>Guia</span>
        <span>Artigos</span>
        <span>Ferramentas</span>
      </div>
      <div className="flex gap-4">
        <span>Cotar Imóvel</span>
        <span>Planos</span>
        <span>Entrar</span>
      </div>
      <OutlineButton>Cadastrar</OutlineButton>
    </div>
  );
};

export default Header;
