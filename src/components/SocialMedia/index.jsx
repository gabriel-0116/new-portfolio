import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

function SocialMedia() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/gabriel-0116",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/devgabrielsantos01/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/gabrielsz01/",
    },
  ];
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <ul className="list-none flex gap-2">
        {socialLinks.map(({ name, icon, link }) => (
          <li
            key={name}
            title={name}
            className="text-4xl ease-in-out duration-300 flex justify-center items-center hover:-translate-y-1 focus:mb-8 sm:text-3xl"
          >
            <a
              href={link}
              className="group mx-1 text-white ease-in-out duration-300  outline-2 outline-transparent hover:text-purple-500 focus:outline-purple-500 focus:text-purple-500 focus:-translate-y-1"
              target="_blank"
            >
              {icon}
              <div class="hidden group-hover:block">
                <div class="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-xs font-semibold text-purple-500 before:-top-2">
                  <div class="rounded-md bg-white py-1 px-2">
                    <p class="whitespace-nowrap">{name}</p>
                  </div>
                  <div class="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialMedia;
