import Image from "../../../assets/imgs/me2.jpeg";
import { Gradiant } from "../../lib/EffectCard/Gradient";
import { NewCard } from "../../lib/NewCard/NewCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/index";

function About() {
  return (
    <section
      id="about"
      className="p-[10rem_0rem] relative inset-0 bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    >
      <motion.div
        className="grid grid-cols-[35%_53%] gap-[12%] lg:grid-cols-1 lg:text-center lg:justify-items-center md:gap-10"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="lg:w-96">
          <div className="ml-12 lg:justify-center md:ml-0 sm:w-72 sm:ml-12">
            <Gradiant>
              <img src={Image} alt="" className="rounded-3xl" />
            </Gradiant>
          </div>
        </div>
        <div className="mr-52 lg:m-0 xl:mr-10 lg:mx-10">
          <h2 className="bg-gradient-to-t from-purple-400 to-purple-400 via-purple-100 text-transparent bg-clip-text font-bold text-5xl ">
            Sobre mim
          </h2>
          <div className="text-white font-bold my-4">
            <p>
              Desde criança sou encantado por tecnologia e quando descobri que
              programação poderia ser minha realiadade minha paixão só cresceu.
              Faço trabalhos de freelance a alguns meses e com isso e foco
              diário nos estudos estou em constante evolução das minhas
              habilidades. Durante esses meses concluí cursos de programação na
              OneBitCode e continuo realizando outros, também ingressei na
              graduação de Análise e Desenvolvimento de Sistemas.
            </p>
            <br />
            <p>
              Tenho como diferencial o rápido aprendizado, uma boa comunicação e
              sou flexível. Possuo uma forte facilidade e experiência em
              trabalho em equipe que pode ser muito útil. Agora estou
              profundamente conectado com o mundo da programação e meu objetivo
              é me tornar um Desenvolvedor Full Stack de sucesso que possa fazer
              a diferença.
            </p>
          </div>
          <div>
            <NewCard />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
