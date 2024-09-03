import arrow from "../../../assets/imgs/arrowDown.gif";
import me from "../../../assets/imgs/me.svg";
import { DownloadAnimation } from "../../LottieAnimations/download";
import { Background } from "../../lib/Background/Background";
import SocialMedia from "../../SocialMedia";
import cv from "../../../../public/cv.pdf"

function Home() {
  return (
    <main id="home" className="h-screen w-full">
      <Background />
      <div className="absolute w-9/12 h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-center text-zinc-50 font-medium">
        <div>
          <img
            src={me}
            alt=""
            className="w-64 mt-24 rounded-full border-solid border-2 shadow-2xl shadow-gray-400 xl:w-60 lg:w-48 lg:mt-36"
          />
        </div>
        <h1 className="text-4xl mt-5 lg:text-2xl sm:text-xl">
          Olá ! Eu sou Gabriel Santos
        </h1>
        <h2 className="text-2xl mt-5 w-3/6 lg:text-xl md:w-full sm:text-base">
          Pretendo fazer a diferença no seu negócio transmitindo minha essência
          sendo um{" "}
          <span className="bg-gradient-to-br from-purple-700 to-pink-300 text-transparent bg-clip-text font-bold">
            Fullstack Developer
          </span>
        </h2>
        <div className="flex items-center justify-center mt-10">
          <button className="mr-2 bg-gradient-to-br from-purple-700 to-pink-300 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-100 hover:shadow-purple-300 hover:shadow-2xl text-white font-bold px-4 rounded-full w-46 h-14 flex items-center gap-2 ease-in-out duration-300 sm:w-40">
            <DownloadAnimation  />
            <a href={cv} target="_blank">
              <span className="text-lg lg:text-base sm:text-sm">Download CV</span>
            </a>
          </button>
          <SocialMedia />
        </div>
        <h2 Name="text-xl mt-5 xl:mt-5 lg:text-base">
          Fique à vontade para me conhecer melhor
        </h2>
        <img src={arrow} alt="" className="w-40 mt-5 2xl:mt-10 xl:mt-2 sm:w-32" />
      </div>
    </main>
  );
}

export default Home


