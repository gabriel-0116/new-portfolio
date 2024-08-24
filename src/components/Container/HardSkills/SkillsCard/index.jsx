const SkillsCard = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`rounded-lg border-2 border-solid border-white p-10 bg-transparent relative cursor-pointer hover:bg-gradient-to-tr hover:from-purple-300 hover:to-purple-900 lg:p-8 ${
        isActive ? "active bg-gradient-to-tr from-purple-300 to-purple-900" : ""
      }`}
      onClick={() => onClick()}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-xl border-2 border-solid border-purple-800 absolute -top-4 -left-4 lg:w-12 lg:h-12">
        <img
          src={icon}
          alt={title}
          className="w-12 h-auto object-contain lg:w-7"
        />
      </div>

      <span className="text-xl font-medium text-white lg:text-base md:text-sm">
        {title}
      </span>
    </div>
  );
};

export default SkillsCard;
