"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks";
import { AwardAnimation } from "../../LottieAnimations/award";
import { EducationAnimation } from "../../LottieAnimations/education";
import { SkillsAnimation } from "../../LottieAnimations/skills";
import { MdWorkOutline } from "react-icons/md";

export function NewCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-10">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-[46rem] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden rounded-3xl mt-5"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="mt-5">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.05,
                      },
                    }}
                    className="lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon />
                  </motion.button>
                </div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-96 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="flex items-center justify-center gap-2 xl:w-52 lg:w-full md:grid-cols-2 md:grid sm:grid-cols-1">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex items-center justify-center group p-5
            dark:hover:shadow-2xl dark:hover:shadow-violet-300 dark:bg-purple-900/[0.1] dark:hover:bg-gradient-to-tr dark:hover:from-purple-900/10 
            dark:hover:via-violet-600/30 dark:hover:to-violet-700/70 dark:border-white/[0.2] 
            border-black/[0.1] rounded-xl xl:mt-10"
          >
            <div className="flex gap-4 flex-col group-hover:-translate-y-2 ease-in-out duration-300 ">
              <motion.div layoutId={`img-${card.title}-${id}`}>
                {card.src}
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center "
                >
                  {card.title}
                </motion.h3>
              </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black md:mt-0"
              >
              {card.ctaButton}
            </motion.button>
              </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-6 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Experiências",
    ctaButton: "Click me",
    src: <AwardAnimation />,
    content: () => {
      return (
        <div className="grid flex-col gap-2 mt-2">
          <p className="text-base text-white">
            Minha jornada como Desenvolvedor Fullstack, tentando aderir o máximo de experiências possível.
          </p>
          <ol className="relative ms-4 border-s border-gray-500">
            <li className="ms-6">
              <span className="text-2xl absolute flex justify-center items-center w-6 h-6 rounded-full -start-3 ring-purple-500 ring-2 p-1 bg-black">
                <MdWorkOutline />
              </span>
              <h3 className="text-white text-xl">Freelance</h3>
              <span className="text-purple-300 text-base">
                Desenvolvedor FullStack
              </span>
              <time className="block">abril de 2024 - momento</time>
              <p className="text-sm text-white">
                Utilizando minhas habilidades e conhecimentos adiquirido com
                estudos para trabalhar projentando sites
              </p>
            </li>
          </ol>
        </div>
      );
    },
  },
  {
    title: "Soft Skills",
    ctaButton: "Click me",
    src: <SkillsAnimation />,
    content: () => {
      return (
        <div className="grid flex-col gap-2 mt-2">
          <p className="text-base text-white">
            Habilidades que desenvolvi e adquirir com o experiências e vivências na minha jornada como pessoa.
          </p>
          <ul className="relative ms-4 border-s border-gray-500">
            <li className="ms-6">
              <span className="text-2xl absolute flex justify-center items-center w-6 h-6 rounded-full -start-3 ring-purple-500 ring-2 p-1 bg-black">
                <MdWorkOutline />
              </span>
              <h3 className="text-purple-300 text-2xl">Habilidades</h3>
              <ul className="text-white text-sm">
                <li>Criatividade</li>
                <li>Comunicação</li>
                <li>Capacidade Analítica</li>
                <li>Adaptabilidade</li>
                <li>Proatividade</li>
                <li>Trabalho em Equipe</li>
                <li>Facilidade em Aprender</li>
                <li>Organização</li>
              </ul>
              <span className="text-2xl absolute flex justify-center items-center w-6 h-6 rounded-full -start-3 ring-purple-500 ring-2 p-1 bg-black">
                <MdWorkOutline />
              </span>
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Formação",
    ctaButton: "Click me",
    src: <EducationAnimation />,
    content: () => {
      return (
        <div className="grid flex-col gap-2 mt-2">
          <p className="text-base text-white">
            Um pouco do meus conhecimentos até o momento
          </p>
          <ol className="relative ms-4 border-s border-gray-500">
            <li className="ms-6">
              <span className="text-2xl absolute flex justify-center items-center w-6 h-6 rounded-full -start-3 ring-purple-500 ring-2 p-1 bg-black">
                <MdWorkOutline />
              </span>
              <h3 className="text-white text-xl">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <span className="text-purple-300 text-base">
                Universidade Paulista
              </span>
              <time className="block">
                agosto de 2024 - agosto de 2026 (término previsto)
              </time>
              <p className="text-sm text-white">
                Graduação com o foco em análise e desenvolvimento de software
              </p>
            </li>
          </ol>
          <ol className="relative ms-4 border-s border-gray-500">
            <li className="ms-6">
              <span className="text-2xl absolute flex justify-center items-center w-6 h-6 rounded-full -start-3 ring-purple-500 ring-2 p-1 bg-black">
                <MdWorkOutline />
              </span>
              <h3 className="text-white text-xl">
                Javascript Fullstack
              </h3>
              <span className="text-purple-300 text-base">
                OneBitCode
              </span>
              <time className="block">
                agosto de 2024 - momento
              </time>
              <p className="text-sm text-white">
                Curso com Linguagens de Programação, FrameWork, Bibliotecas, API's e Ferramentas úties.
              </p>
            </li>
          </ol>
        </div>
      );
    },
  },
];
