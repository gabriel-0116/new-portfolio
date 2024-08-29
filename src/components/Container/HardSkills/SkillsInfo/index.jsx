import { animate } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const SkillsInfo = ({ heading, skills }) => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [5, 1],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="min-h-96  rounded-xl border-2 border-solid border-purple-500 bg-black backdrop-blur-lg">
      <h4 className="text-2xl text-center font-semibold p-[0.8rem_2rem] bg-gradient-to-br from-purple-300 to-pink-100 text-transparent bg-clip-text border-b-2 border-solid border-purple-500 md:text-xl">
        {heading}
      </h4>

      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="grid grid-cols-4 p-10 gap-28 lg:p-6 lg:gap-20 md:grid-cols-3 sm:grid-cols-2 2sm:grid-cols-1"
      >
        {skills.map((item, index) => (
          <div className="" key={`skill_${index}`}>
            <div className="grid items-center justify-center hover:-translate-y-2 ease-in-out duration-300">
              <img src={item.icon} alt={item.title} className="w-24 "></img>
              <span className="text-white bg-transparent text-center mt-3 rounded-full shadow-zinc-800 shadow-xl">{item.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsInfo;
