import React from "react";
import { useForm } from "react-hook-form";

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cpf: "",
      telefone: "",
      mensagem: "",
    },
  });
  return (
    <main>
      <section className="w-full flex justify-around mt-6">
        <div className="flex gap-2">
          <div className="font-bold text-lg">1</div>
          <div className="w-96 h-96 flex-col border-2 border-black rounded-xl p-6">
            <div className="flex gap-2">
              <img
                src="corretora.jpg"
                alt="corretora"
                title="imagem corretora"
                className="w-36 h-36"
              />
              <div>
                <h2 className="font-bold text-lg text-azul">Nome Corretora</h2>
                <p className="text-azul">3.000 pontos</p>
                <p className="underline decoration-solid underline-offset-2 text-laranja">
                  ver telefone
                </p>
              </div>
            </div>
            <div className="flex my-8 gap-2">
              <img
                src="corretor.jpg"
                alt="corretor"
                title="imagem corretor"
                className="w-36 h-36"
              />
              <div>
                <h2 className="font-bold text-lg text-azul">Nome Corretor</h2>
                <p className="text-azul">1.260 pontos</p>
                <p className="underline decoration-solid underline-offset-2 text-laranja">
                  ver telefone
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="font-bold text-lg">2</div>
          <div className="w-96 h-96 flex-col border-2 border-black rounded-xl p-6">
            <h2 className="text-3xl text-azul">Mande uma mensagem:</h2>
            <form
              className="mb-4"
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <input
                className="border-solid border-2 border-slate-200 rounded-lg p-1 w-3/4 my-2"
                {...register("cpf", { required: "Campo obrigatório" })}
                placeholder="Digite seu CPF"
              />
              <p>{errors.cpf?.message}</p>
              <input
                className="border-solid border-2 border-slate-200 rounded-lg p-1 w-3/4 my-2"
                {...register("telefone", { required: "Campo obrigatório" })}
                placeholder="Digite seu telefone"
              />
              <p>{errors.telefone?.message}</p>
              <input
                className="border-solid border-2 border-slate-200 rounded-lg p-1 w-3/4 h-28 my-2"
                {...register("mensagem", { required: "Campo obrigatório" })}
                placeholder="Digite o assunto"
              />
              <p>{errors.mensagem?.message}</p>
              <button
                onClick={Clicar}
                className="border-solid border-2 border-laranja rounded-lg p-1 bg-laranja text-white"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="font-bold text-lg">3</div>
          <div className="w-96 h-96 flex-col border-2 border-black rounded-xl p-6">
            <h2>Regra de 3</h2>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

function Clicar() {
  alert("O botão foi clicado");
}
export default Main;
