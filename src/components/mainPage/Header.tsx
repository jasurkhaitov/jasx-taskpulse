import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="dark:bg-[#111827] bg-white w-full">
      <div className="2xl:w-[1400px] flex items-center justify-between xl:w-[1200px] m-auto px-[15px] md:px-[30px] pt-[150px] md:pt-[200px] pb-[100px] md:pb-[100px] gap-[50px] lg:gap-[100px] 2xl:gap-0">
        <div className="w-full sm:w-[80%] md:w-[70%] xl:w-1/2">
          <div className="border-black dark:border-white border-opacity-30 duration-100 delay-150 border-[1px] inline-block px-3 py-2 rounded-3xl bg-[#E5E7EB] dark:bg-darkBox">
            <div className="text-white text-base mr-2 border-none bg-btnBlue inline-block px-3 rounded-xl">
              New
            </div>

            <p className="text-black dark:text-white text-base inline-block">
              Write, plan and organize
            </p>
          </div>

          <h1 className="mt-5 2xl:w-[80%] text-black dark:text-gray-300 text-4xl md:text-5xl 1200px:text-6xl font-mon font-bold">
            All-of-them in one space
          </h1>

          <p className="dark:text-gray-500 2xl:w-[80%] my-3 text-black text-lg 1200px:text-xl">
            Get everyone working in a single platform designed to manage any
            type of work.
          </p>

          <div className="mt-[30px]">
            <Link
              className="bg-gradient-to-r from-blue-500 to-pink-500 px-[40px] py-[15px] rounded-2xl text-lg 1200px:text-xl font-bold text-white"
              to={"/signup"}
            >
              Sign Up for free
            </Link>
          </div>
        </div>

        <div className="w-1/2 hidden xl:flex justify-end">
          <iframe
            width="560"
            className="rounded-2xl"
            height="315"
            src="https://www.youtube.com/embed/gJCS1gqk8ME?si=gG_gYHk4dt82jytA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </header>
  );
}