import { iconSvg } from "../../utilits/Icon.tsx";
import Logo from "../../assets/logo.png";
import LogoDark from "../../../public/JasX.png";
import { useContext, useState, useEffect } from "react";
import { MyGlobalContext } from "@/context/Context";
import { Link } from "react-router-dom";


export default function Navbar() {

  const { themeChange, setThemeChange } = useContext(MyGlobalContext);

  const [mode, setMode] = useState( 
    themeChange === "dark" ? iconSvg.sun : iconSvg.moon
  );

  useEffect(() => {
    setMode(themeChange === "dark" ? iconSvg.sun : iconSvg.moon);
  }, [themeChange]);

  const handleChangeTheme = () => {
    const newTheme = themeChange === "dark" ? "light" : "dark";
    setThemeChange(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="dark:bg-[#1F2937] shadow-md bg-[#F3F4F6] fixed top-0 left-0 w-full border-black border-b-[0.5px] dark:border-white border-opacity-20 z-50">
      <div className="flex 2xl:w-[1500px] items-center justify-between m-auto px-[15px] md:px-[30px] py-3 md:py-5">
        <a href="/" className="flex items-center justify-center gap-2">
          <img
            className="w-[30px] sm:w-[40px] dark:hidden"
            src={Logo}
            alt="Logo"
          />
          <img
            className="w-[35px] sm:w-[45px] hidden dark:block"
            src={LogoDark}
            alt="Logo Dark"
          />
          <span className="text-xl sm:text-2xl font-mon font-bold text-black dark:text-white">
            JasX
          </span>
        </a>

        <div className="flex items-center justify-end gap-[20px]">
          <button
            onClick={handleChangeTheme}
            className="border-[1px] p-[11px] rounded-lg border-black dark:border-white border-opacity-30 dark:hover:bg-white hover:bg-black hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-100 delay-150"
          >
            {mode}
          </button>

          <a
            href="https://t.me/JasXDev" target="_blank"
            className="border-[1px] p-[11px] rounded-lg border-black dark:border-white border-opacity-30 dark:hover:bg-white hover:bg-black hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-100 delay-150"
          >
            <svg
              className=" stroke-black dark:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              width="23px"
              height="23px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M16 18a4 4 0 0 0-8 0" />
                <circle cx="12" cy="11" r="3" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M8 2v2m8-2v2" />
              </g>
            </svg>
          </a>

          <div className="border-[1px] py-[6px] px-[10px] rounded-lg border-black dark:border-white border-opacity-30 duration-100 delay-150 sm:flex items-center gap-2 hidden">
            <Link
              className="px-[12px] py-[4px] dark:hover:bg-white hover:bg-black hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-100 delay-150 rounded-lg text-base text-black dark:text-white"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="px-[12px] py-[4px] rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-base text-white"
              to="/signup"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
