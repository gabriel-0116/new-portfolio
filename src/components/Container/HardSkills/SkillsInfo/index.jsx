import { animate } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
const SkillsInfo = ({ heading, skills }) => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, 5],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="min-h-96 w-[45rem] rounded-xl border-2 border-solid border-purple-300 bg-transparent backdrop-blur-lg">
      <h4 className="text-xl font-medium p-[0.8rem_2rem] bg-gradient-to-br from-purple-700 to-pink-300 text-transparent bg-clip-text border-b-2 border-solid border-slate-800 ">
        {heading}
      </h4>

      <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="grid grid-cols-4 p-10 gap-12 lg:p-6"
        >
        {skills.map((item, index) => (
          <div className="" key={`skill_${index}`}>
            <div>
              <img src={item.icon} alt={item.title} className="w-24" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsInfo;
