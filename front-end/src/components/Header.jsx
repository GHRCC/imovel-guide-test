import React from "react";
import Link from "./Link";
import OutlineButton from "./OutlineButton";

const Header = () => {
  return (
    <div className="md:flex items-center justify-around gap-2 h-16 bg-azul text-white  px-16">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          title="imovel guide logo"
          className="w-28 h-12"
        />
      </div>

      <nav className="flex gap-4 grow">
        <Link href="/condominio">Condomínio</Link>
        <Link href="/forum">Fórum</Link>
        <Link href="/guia">Guia</Link>
        <Link href="/artigos">Artigos</Link>
        <Link href="/ferramentas">Ferramentas</Link>
      </nav>

      <nav className="flex gap-4 sm:display-none">
        <Link href="/cotar">Cotar Imóvel</Link>
        <Link href="/planos">Planos</Link>
        <Link href="/entrar">Entrar</Link>
      </nav>
      <OutlineButton>Cadastrar</OutlineButton>
    </div>
  );
};

export default Header;
