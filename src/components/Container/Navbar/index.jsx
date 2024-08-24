import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Início", link: "#home" },
    { name: "Sobre", link: "#about" },
    { name: "Habilidades", link: "#skills" },
    { name: "Projetos", link: "#projects" },
    { name: "Contato", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "mdmin:bg-gradient-to-br mdmin:from-purple-700 mdmin:to-pink-300/50  mdmin:text-white" : "text-white"
      }`}
    >
      <div className="flex items-center justify-center">
        <div
          className={` ${
            sticky ? "mdmin:bg-white/0 bg-white" : "bg-gradient-to-br from-purple-700 to-pink-300"
          } text-white mdmin:block hidden px-7 py-2 font-bold  rounded-bl-full rounded-br-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-purple-200 hover:shadow-purple-700 hover:rounded-lg hover:shadow-xl">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl mdmin:hidden m-5 w-full flex items-end justify-end`}
        >
          <FiMenu name="menu"></FiMenu>
        </div>
        <div
          className={`mdmin:hidden text-gray-900 absolute w-56 h-screen opacity-80
            px-7 py-2 font-medium bg-white top-0 duration-300  ${
              open ? "right-0" : "right-[-100%]"
            }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-10 py-2 text-lg ">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-purple-500"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
