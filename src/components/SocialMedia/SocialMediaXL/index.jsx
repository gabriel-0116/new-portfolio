import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

function SocialMediaXL() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://www.github.com",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/koolkishan/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/koolkishansheth",
    },
  ];
  return (
    <motion.div
      className="flex justify-center items-center mt-6 xlmin:hidden"
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
            className="text-4xl ease-in-out duration-300 flex justify-center items-center hover:-translate-y-1 focus:mb-8"
          >
            <a
              href={link}
              className="p-2.5 text-white ease-in-out duration-300  outline-2 outline-transparent hover:text-purple-500 focus:outline-purple-500 focus:text-purple-500 focus:-translate-y-1"
              target="_blank"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialMediaXL;
