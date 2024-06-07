import { iconSvg } from '@/utilits/icon'
import Logo from '../../public/JasX.png'

export default function Navbar() {

  return (
    <nav className='dark:bg-[#1F2937] bg-white border-b-2 border-white border-opacity-20'>
        <div className='flex w-[1200px] items-center justify-between m-auto py-5'> 
            <a href="/" className='flex items-center justify-center gap-2'>
                <img className='w-[50px]' src={Logo} alt="" />
                <span className='text-3xl font-mon font-bold'>JasX</span>
            </a>

            <div className='flex items-center justify-end gap-[30px]'>
                <button className='border-[1px] p-[8px] rounded-lg border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 duration-100 delay-150 rounded-[10px'>{iconSvg.sun}</button>

                <button className='p-[10px] hover:bg-white hover:bg-opacity-10 duration-100 delay-150 rounded-[10px]'>{iconSvg.contact}</button>

                <button className='p-3 border-none bg-blue-700 rounded-lg font-roboto text-white font-[400] text-base active:scale-90'>Get Started</button>
            </div>
        </div>
    </nav>
  )
}