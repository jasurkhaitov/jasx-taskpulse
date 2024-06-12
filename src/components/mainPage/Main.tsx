import { Altimg } from "../../utilits/Icon.tsx";

export default function Main() {
  return (
    <main className="dark:bg-[#111827] pt-10 bg-white w-full">
      <div className="2xl:w-[1400px] hidden md:grid grid-cols-8 xl:w-[1200px] m-auto px-[15px] md:px-[30px] pb-[100px] items-center justify-center">
        {
          Altimg.map((item:string, index:number) => {
            return (
              <img key={index} src={item} className="w-[40px] m-auto" alt="Alternative Tools" />
            );
          })
        }
      </div>
    </main>
  );
}
