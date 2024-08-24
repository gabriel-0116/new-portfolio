const Card = ({ children, className, onClick }) => {
  return (
    <article
      className={`bg-gradient-to-br from-purple-700 to-pink-300 text-white font-bold
            p-6 border-2 border-solid 
            rounded-3xl ease-in-out 
            hover:border-purple-500 
            -translate-y-2 sm:p-['1.2rem'] transition delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </article>
  );
};

export default Card;
