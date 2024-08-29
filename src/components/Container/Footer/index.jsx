import { UpAnimation } from "../../LottieAnimations/up";

function Footer() {
  return (
    <footer className="relative inset-0 bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] h-16">
      <div className="flex item-center justify-between mx-12">
        <a href="#home">
          <div className="flex items-center text-white text-5xl font-black cursor-pointer group lg:text-3xl sm:text-xl sm:mr-4">
            <span className="bg-gradient-to-t from-white to-white via-zinc-200 text-transparent bg-clip-text">
              G
            </span>
            <span className="bg-gradient-to-t from-purple-900 to-purple-800 via-purple-300 text-transparent bg-clip-text max-w-0 opacity-0 transition-all duration-500 ease-in group-hover:max-w-[1em] group-hover:opacity-100">
              A
            </span>
            <span className="bg-gradient-to-t from-white to-white via-zinc-200 text-transparent bg-clip-text">
              B
            </span>
            <span className="bg-gradient-to-t from-purple-900 to-purple-800 via-purple-300 text-transparent bg-clip-text max-w-0 opacity-0 transition-all duration-500 ease-in group-hover:max-w-[1em] group-hover:opacity-100">
              R
            </span>
            <span className="bg-gradient-to-t from-purple-900 to-purple-800 via-purple-300 text-transparent bg-clip-text max-w-0 opacity-0 transition-all duration-500 ease-in group-hover:max-w-[1em] group-hover:opacity-100">
              I
            </span>
            <span className="bg-gradient-to-t from-purple-900 to-purple-800 via-purple-300 text-transparent bg-clip-text max-w-0 opacity-0 transition-all duration-500 ease-in group-hover:max-w-[1em] group-hover:opacity-100">
              E
            </span>
            <span className="bg-gradient-to-t from-purple-900 to-purple-800 via-purple-300 text-transparent bg-clip-text max-w-0 opacity-0 transition-all duration-500 ease-in group-hover:max-w-[1em] group-hover:opacity-100">
              L
            </span>
          </div>
        </a>
        <div className="text-white flex items-center font-medium sm:text-sm">
          <p>Feito por © Gabriel Santos <span className="2sm:hidden">2024 🤙🏻</span></p>
        </div>
        <div className="flex items-center">
          <a href="#home">
            <button className="bg-gradient-to-t from-white to-white via-zinc-200 px-2 rounded-full shadow-md shadow-white hover:-translate-y-1 transition-all duration-300 ease-in-out sm:w-10 sm:flex">
              <UpAnimation />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
