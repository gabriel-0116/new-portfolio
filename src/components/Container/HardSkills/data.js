import react from "../../../assets/imgs/react.svg";
import javascript from "../../../assets/imgs/javascript.svg";
import typescript from "../../../assets/imgs/typescript.svg";
import node from "../../../assets/imgs/node.svg";
import sass from "../../../assets/imgs/sass.svg";
import git from "../../../assets/imgs/git.svg";
import css from "../../../assets/imgs/css.svg";
import html from "../../../assets/imgs/html.svg";
import figma from "../../../assets/imgs/figma.svg";
import bootstrap from "../../../assets/imgs/bootstrap.svg";
import frontend from "../../../assets/imgs/frontend.png";
import backend from "../../../assets/imgs/backend.png"
import others from "../../../assets/imgs/others.png"


const skills = [
  {
    title: "Front-End",
    icon: frontend,
    skills: [
      { icon: react },
      { icon: javascript },
      { icon: typescript },
      { icon: node },
      { icon: sass },
      { icon: bootstrap },
      { icon: html },
      { icon: css },
    ],
  },
  {
    title: "Back-End",
    icon: backend,
    skills: [
      { icon: javascript },
      { icon: typescript },
      { icon: node },
    ],
  },
  {
    title: "Outros",
    icon: others,
    skills: [
      { icon: figma },
      { icon: git },
    ],
  },
];

export default skills;
