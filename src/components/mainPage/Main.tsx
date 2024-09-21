import { Altimg } from "../../util/icon.tsx"

export default function Main() {
  return (
    <main className="dark:bg-[#111827] p-0 md:pt-10 bg-white w-full">
      <div className="2xl:w-[1400px] grid grid-cols-4 md:grid-cols-8 xl:w-[1200px] m-auto px-[15px] md:px-[30px] pb-[100px] gap-5 items-center justify-center">
        {
          Altimg.map((item: string, index: number) => {
            return (
              <img key={index} src={item} className="w-[35px] xsm:w-[40px] m-auto" alt="Alternative Tools" />
            )
          })
        }
      </div>
    </main>
  )
}
