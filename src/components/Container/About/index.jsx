import Image from "../../../assets/imgs/me2.jpeg";
import { Gradiant } from "../../lib/EffectCard/Gradient";
import { NewCard } from "../../lib/NewCard/NewCard";

function About() {
  return (
    <section className="p-[10rem_0rem] ">
      <div className="grid grid-cols-[35%_53%] gap-[12%] lg:grid-cols-1 lg:text-center lg:justify-items-center">
        <div className="lg:w-96">
          <div className="h-fit max-h-[40rem] ml-12 lg:justify-center">
            <Gradiant><img src={Image} alt="" className="rounded-3xl"/></Gradiant>
          </div>
        </div>
        <div className="mr-52 lg:m-0 xl:mr-10 lg:mx-10">
          <h2 className="text-white font-bold text-5xl">Sobre mim</h2>
          <div className="text-white font-bold mt-4">
            <p>
              Desde criança sou encantado por tecnologia e quando descobri que
              programação poderia ser minha realiadade minha paixão só cresceu.
              Faço trabalhos de freelance a alguns meses e com isso e foco diário
              nos estudos estou em constante evolução das minhas habilidades.
              Durante esses meses concluí cursos de programação na OneBitCode e
              continuo realizando outros, também ingressei na graduação de Análise
              e Desenvolvimento de Sistemas. 
            </p>
            <br />
            <p>
              Tenho como diferencial o rápido
              aprendizado, uma boa comunicação e sou flexível. Possuo uma forte
              facilidade e experiência em trabalho em equipe que pode ser muito
              útil. Agora estou profundamente conectado com o mundo da programação
              e meu objetivo é me tornar um Desenvolvedor Full Stack de sucesso
              que possa fazer a diferença.
            </p>
          </div>
          <div className="">
            <NewCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
