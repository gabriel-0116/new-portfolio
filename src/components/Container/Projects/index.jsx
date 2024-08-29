import React from "react";
import { CardBody, CardContainer, CardItem } from "../../lib/Card3D";
import cards from "./data";
import { FiGithub } from "react-icons/fi";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/index";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="relative inset-0 bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-[12rem_0rem]"
      >
        <div className="z-10 pb-20 text-center flex-1 justify-center items-center">
          <h2 className="bg-gradient-to-t from-purple-900 to-purple-800 via-purple-300 text-transparent bg-clip-text flex items-center justify-center mb-8 text-6xl font-semibold md:text-5xl">
            Projetos
          </h2>
          <p className="mt-4 text-2xl font-medium text-zinc-200 md:text-xl">
            Projetos pessoais e profissionais realizados por mim a fim de
            colocar em prática os conhecimentos adquiridos
          </p>
        </div>
        <motion.div 
        className="flex justify-center items-center gap-10 "
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        >
          {cards.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-violet-300 dark:bg-purple-900/[0.1] dark:hover:bg-gradient-to-tr dark:hover:from-purple-900/10 dark:hover:via-violet-600/30 dark:hover:to-violet-700/70 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
                <CardItem translateZ="100" className="">
                  <div className="">
                    <img src={item.image} alt="" className="h-44" />
                  </div>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="mt-2 text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="w-[26rem] text-neutral-500 text-sm mt-2 dark:text-neutral-300 sm:w-fit"
                >
                  {item.description}
                </CardItem>
                <div className="flex items-center justify-between mt-4">
                  <CardItem translateZ={20} className="flex">
                    {item.icons.map((icon, index) => (
                      <img
                        src={icon}
                        alt=""
                        key={index}
                        className="w-7 my-5 mx-1 "
                      />
                    ))}
                  </CardItem>
                  <div className="flex items-center">
                    <button className="group">
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={item.live}
                        target="__blank"
                        className="px-4 py-2 flex rounded-xl text-white text-2xl font-bold"
                      >
                        <FiGithub />
                        <div className="hidden group-hover:block">
                          <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-xs text-slate-300 before:-top-2">
                            <div className="rounded-sm bg-black py-1 px-2">
                              <p className="whitespace-nowrap">Visitar</p>
                            </div>
                            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
                          </div>
                        </div>
                      </CardItem>
                    </button>
                    <button className="group">
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={item.rep}
                        target="__blank"
                        className="px-4 py-2 flex rounded-xl dark:bg-white dark:text-black text-white text-base font-bold"
                      >
                        <FaUpRightFromSquare />
                        <div className="hidden group-hover:block">
                          <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-xs text-slate-300 before:-top-2">
                            <div className="rounded-sm bg-black py-1 px-2">
                              <p className="whitespace-nowrap">Repositório</p>
                            </div>
                            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
                          </div>
                        </div>
                      </CardItem>
                    </button>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
