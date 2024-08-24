import { useState } from "react";
import skills from "./data";
import SkillCard from "./SkillsCard";
import SkillsInfo from "./SkillsInfo";

const HardSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="relative sm:p-0">
      <h2 className="text-2xl font-semibold mb-14 md:text-xl md:mb-8">Skills</h2>

      <div className="ml-12 mr-12 flex items-start gap-12 lg:gap-8 md:flex-col-reverse md:gap-12">
        <div className="flex-[1] grid gap-12 grid-cols-[repeat(2,_1fr)] lg:pl-4 lg:gap-8 md:w-full">
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

        <div className="flex md:w-full">
          <SkillsInfo
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default HardSkills;
