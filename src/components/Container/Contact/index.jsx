import { HoverEffect } from "../../lib/CardHover/index";
import { FaLinkedinIn, FaInstagram, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/index";

function Contact() {
  return (
    <section id="contact" className="relative inset-0 bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="">
        <h2 className="py-20 bg-gradient-to-t from-purple-600 to-purple-100 via-purple-800 text-transparent bg-clip-text font-bold text-5xl text-center ">
          Entre em CONTATO
        </h2>
      </div>
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="py-10 max-w-5xl mx-auto px-8"
      >
        <HoverEffect items={projects} />
      </motion.div>
    </section>
  );
}
export const projects = [
  {
    icon: <FaGithub className="text-white " />,
    title: "Github",
    description:
      "Conheça meus repositórios",
    link: "https://github.com/gabriel-0116",
  },
  {
    icon: <FaLinkedinIn className="text-white bg-[#0077b5] p-2 rounded-2xl" />,
    title: "Linkedin",
    description:
      "Entre em contato e conhaça um pouco meu lado profissional",
    link: "https://www.linkedin.com/in/devgabrielsantos01/",
  },
  {
    icon: <FaInstagram className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-2xl p-1" />,
    title: "Instagram",
    description:
      "Um pouco da minha vida pessoal",
    link: "https://www.instagram.com/gabrielsz01/",
  },
  {
    icon: <SiGmail className="text-[#f84437] bg-white rounded-xl p-1" />,
    title: "Gmail",
    description:
      "Entre em contato para podemos fazer negócios",
    link: "mailto:devgabrielsantos01@gmail.com&body=Ol%C3%A1+!!!+Tudo+bem+?",
  },
  {
    icon: <FaWhatsapp className="bg-[#54cc61] text-white  rounded-2xl p-1" />,
    title: "Whatsapp",
    description:
      "Podemos conversa sobre qualquer assunto",
    link: "https://wa.me/5511972248790",
  },
  {
    icon: <FaDiscord className="text-white bg-[#7289da] rounded-2xl p-1" />,
    title: "Discord",
    description:
      "Um lugar para ficar em ligação para que podemos programar e aprender juntos",
    link: "https://discord.gg/w9U4mVKwyC",
  },
];

export default Contact;
