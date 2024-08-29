const SkillsCard = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`w-80 shadow-2xl shadow-white rounded-lg border-2 border-solid border-white p-8 bg-transparent relative cursor-pointer 2xl:w-96 xl:w-full xl:flex xl:items-center xl:justify-center ${

        isActive
          ? "bg-gradient-to-tr from-purple-300 to-purple-900 shadow-none"
          : ""
      }`}
      onClick={() => onClick()}
    >
      <div
        className={`w-16 h-16 flex items-center justify-center bg-purple-100 rounded-xl border-2 border-solid border-purple-900 absolute -top-4 -left-4  ${
          isActive ? "bg-white" : ""
        }`}
      >
        <img
          src={icon}
          alt={title}
          className="w-12 h-auto object-contain"
        />
      </div>

      <span
        className={`bg-gradient-to-br from-purple-300 to-pink-100 text-transparent bg-clip-text ml-10 text-2xl font-semibold md:text-center md:text-xl ${
          isActive ? "text-white" : ""
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default SkillsCard;
