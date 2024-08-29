import { useRef, useState } from "react";
import skills from "./data";
import SkillCard from "./SkillsCard";
import SkillsInfo from "./SkillsInfo";
import { Gradiant } from "../../lib/EffectCard/Gradient";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/index";


const HardSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  

  return (
    <section className="relative inset-0 bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    >  
    <motion.div 
      className="relative sm:p-0 z-10 p-[7rem_0rem]"
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
        <h2 className="pt-32 bg-gradient-to-t from-purple-600 to-purple-500 via-purple-200 text-transparent bg-clip-text flex items-center justify-center text-6xl font-semibold md:text-5xl ">
          Habilidades
        </h2>
        <p className="mt-4 text-center text-2xl font-medium text-zinc-200 md:text-xl">
          Conhecimentos sólidos adquiridos ao decorrer do tempo com muito estudo
          e prática
        </p>
        <div className="ml-12 mr-12 my-[7.5rem] flex items-start justify-center gap-12 xl:grid sm:mb-0">
          <div className="grid gap-12 grid-cols-[repeat(2,_1fr)] 2xl:grid-cols-1 xl:grid-cols-1 lg:gap-8 md:w-full 2sm:w-fit ">
            {skills.map((item) => (
              <SkillCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>

          <div className="md:w-full">
            <Gradiant>
              <SkillsInfo
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
              />
            </Gradiant>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HardSkills;
