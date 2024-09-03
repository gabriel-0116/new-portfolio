import stock from "../../../assets/imgs/stock.svg";
import react from "../../../assets/imgs/react.svg";
import javascript from "../../../assets/imgs/javascript.svg";
import sass from "../../../assets/imgs/sass.png";
import git from "../../../assets/imgs/git.svg";
import routerDom from "../../../assets/imgs/router-dom.svg";
import iplan from "../../../assets/imgs/iplan.svg";
import css from "../../../assets/imgs/css.svg";
import html from "../../../assets/imgs/html.svg";

const cards = [
  {
    image: stock,
    title: "Controle de Estoque",
    description:
      "O Controle de Estoque é um projeto parar facilitar o estoque da empresa, permitindo adicionar novos itens, atualizar informações, visualizar o estoque e excluir itens. Desenvolvido com foco no aprendizado e aprimoramento das habilidades de roteamento em React.",
    live: "https://controle-de-estoque-gs-ten.vercel.app/",
    rep: "https://github.com/gabriel-0116/controle-de-estoque",
    icons: [
      react,
      javascript,
      git,
      sass,
      routerDom,
    ],
  },
  {
    image: iplan,
    title: "Catálogo de Produtos",
    description:
      "Projeto para facilitar a vizualição de produtos que serão vendidos na loja, com informações de cada produto, permitindo que os clientes vejam cada produto e possa saber um especialista no Whatsapp para qualquer dúvida ou negociação.",
    live: "",
    rep: "",
    icons: [
      javascript,
      html,
      css,
    ],
  },
];

export default cards 
