import React, { useState } from "react";

const Calculadora = () => {
  const [valorA, setValorA] = useState("");
  const [valorB, setValorB] = useState("");
  const [resultado, setResultado] = useState("");

  const regraDeTres = () => {
    if (valorA && valorB) {
      const valorResultado = (parseFloat(valorB) * 3) / parseFloat(valorA);
      setResultado(`Resultado: ${valorResultado}`);
    } else {
      setResultado("Valores inválidos");
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-azul"> Regra de 3</h2>
      <div className="border-solid border-2 mb-2 my-2 rounded-lg">
        <input
          className="w-full"
          type="number"
          value={valorA}
          placeholder="Valor A"
          onChange={(e) => setValorA(e.target.value)}
        />
      </div>
      <div className="border-solid border-2 rounded-lg">
        <input
          className="w-full"
          type="number"
          value={valorB}
          placeholder="Valor B"
          onChange={(e) => setValorB(e.target.value)}
        />
      </div>
      <div className="my-8 text-center">
        <p>{resultado}</p>
      </div>
      <div className="text-center">
        <button
          className="my-16 border-solid border-laranja border-2 rounded-lg text-white text-lg bg-laranja px-2"
          onClick={regraDeTres}
        >
          Calcular
        </button>
      </div>
    </div>
  );
};

export default Calculadora;
