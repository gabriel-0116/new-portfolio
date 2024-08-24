import arrow from "../../../assets/imgs/arrowDown.gif";
import me from "../../../assets/imgs/me.svg";
import { DownloadAnimation } from "../../LottieAnimations/download";
import { Background } from "../../lib/Background/Background";
import SocialMediaXL from "../../SocialMedia/SocialMediaXL";

function Home() {
  return (
    <main className="h-screen w-full">
      <Background />
      <div className="absolute w-9/12 h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center text-zinc-50 font-medium">
        <div>
          <img
            src={me}
            alt=""
            className="w-64 mt-24 rounded-full border-solid border-2 shadow-2xl shadow-gray-400 xl:w-60 lg:w-48 lg:mt-36"
          />
        </div>
        <h1 className="text-4xl mt-5 lg:text-2xl">
          Olá ! Eu sou Gabriel Santos
        </h1>
        <h2 className="text-2xl mt-5 w-3/6 lg:text-xl">
          Pretendo fazer a diferença no seu negócio transmitindo minha essência
          sendo um{" "}
          <span className="bg-gradient-to-br from-purple-700 to-pink-300 text-transparent bg-clip-text font-bold">
            Fullstack Developer
          </span>
        </h2>
        <button className="bg-gradient-to-br from-purple-700 to-pink-300 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-100 hover:shadow-purple-300 hover:shadow-2xl text-white font-bold py-2 px-4 rounded-full mt-12 w-46 h-14 flex items-center gap-2 ease-in-out duration-300">
          <DownloadAnimation />
          <a href="" target="_blank"><span className="text-lg lg:text-base">Download CV</span></a>
        </button>
         <SocialMediaXL />
        <h2 className="text-xl mt-12 xl:mt-5 lg:text-base">
          Fique à vontade para me conhecer melhor
        </h2>
        <img src={arrow} alt="" className="w-40 mt-20 2xl:mt-10 xl:mt-2" />
      </div>
    </main>
  );
}

export default Home;
