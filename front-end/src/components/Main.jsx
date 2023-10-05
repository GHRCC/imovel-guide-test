import React from "react";
import OpenImageModal from "./OpenImageModal";
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import Calculadora from "./Calculadora";
import html2canvas from "html2canvas";

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
                <button
                  onClick={Telefone}
                  className="underline decoration-solid underline-offset-2 text-laranja"
                >
                  ver telefone
                </button>
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
                <button
                  onClick={Telefone}
                  className="underline decoration-solid underline-offset-2 text-laranja"
                >
                  ver telefone
                </button>
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
              <IMaskInput
                className="border-solid border-2 border-slate-200 rounded-lg p-1 w-3/4 my-2"
                mask="000.000.000-00"
                placeholder="Digite seu CPF"
              />
              <p>{errors.cpf?.message}</p>
              <IMaskInput
                className="border-solid border-2 border-slate-200 rounded-lg p-1 w-3/4 my-2"
                mask="(00)00000-0000"
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
            <Calculadora />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-around mt-6">
        <div className="flex gap-2">
          <div className="font-bold text-lg">4</div>
          <div>
            <div className="w-96 h-96 flex-col border-2 border-black rounded-xl p-0 overflow-hidden">
              <img
                src="casa.jpg"
                alt="casa"
                title="imagem casa"
                className="rounded-lg h-96 w-96 hover:scale-100 scale-150 transition-transform"
              />
            </div>
            <OpenImageModal />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold text-lg">5</div>
          <div className="flex-col">
            <div className="relative" id="image-2-download">
              <div className="w-96 h-96 flex-col border-2 overflow-hidden border-black rounded-xl">
                <img
                  src="casa.jpg"
                  alt="casa"
                  title="imagem casa"
                  className="rounded-lg h-96 w-96 hover:scale-100 scale-150 transition-transform"
                />
              </div>
              <div className="absolute bottom-6 left-0 text-center w-full">
                <button className="bg-laranja text-white text-lg rounded-lg py-1 px-10 opacity-80">
                  Imovel Guide
                </button>
              </div>
            </div>
            <button
              onClick={downloadImage}
              className="flex justify-center items-center w-96 h-12 border-solid border-2 border-laranja rounded-lg bg-laranja my-8 text-white text-xl"
            >
              <h2>Download</h2>
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="font-bold text-lg">6</div>
          <div className="w-96 h-96 flex-col border-2 border-black rounded-xl">
            <div className="flex gap-2">
              <img
                src="casa.jpg"
                alt="casa"
                title="imagem casa"
                className="rounded-lg h-96 w-96"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

function downloadImage() {
  html2canvas(document.querySelector("#image-2-download")).then((canvas) => {
    canvas.style.display = "none";
    document.body.appendChild(canvas);
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.setAttribute("download", "casa.png");
    a.setAttribute("href", image);
    a.click();
    canvas.remove();
  });
}

function Clicar() {
  alert("O botão foi clicado");
}

function Telefone() {
  alert("(99)99999-9999");
}
export default Main;
