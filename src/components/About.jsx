import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20"> 
          Assim que concluí o ensino médio me veio na cabeça o que eu queria fazer da vida,
          depois de pesquisar sobre todas a profissões possíveis, fiquei encantado do que eu poderia
          fazer com a programação.
        </p>

        <br />

        <p className="text-xl">
         De imediato procurei um curso no youtube, aprendi Python. Com Python crie programas para calcular o imc 
         de uma pessoa, o fatorial de um número etc. Depois de concluir o curso de python fui aprender desenvolvimento web,
         para web estudei desde a parte front end, passando segurança web e agora estudo um pouco de back end.

        </p>
      </div>
    </div>
  );
};

export default About;
