import { iconSvg } from '@/utilits/icon';
import Logo from '../assets/logo.png';
import LogoDark from '../../public/JasX.png';
import { useContext, useState, useEffect } from 'react';
import { MyGlobalContext } from '@/context/Context';
import { Link } from 'react-router-dom';
import User from '../assets/user.png'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { themeChange, setThemeChange } = useContext(MyGlobalContext);

  const [mode, setMode] = useState(themeChange === 'dark' ? iconSvg.sun : iconSvg.moon);

  useEffect(() => {
    setMode(themeChange === 'dark' ? iconSvg.sun : iconSvg.moon);
  }, [themeChange]);

  const handleChangeTheme = () => {
    const newTheme = themeChange === 'dark' ? 'light' : 'dark';
    setThemeChange(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className='dark:bg-[#1F2937] shadow-md bg-[#F3F4F6] fixed top-0 left-0 w-full border-black border-b-2 dark:border-white border-opacity-20'>
      <div className='flex xl:w-[1200px] items-center justify-between m-auto px-[15px] md:px-[30px] py-3 md:py-5'>
        <a href="/" className='flex items-center justify-center gap-2'>
          <img className='w-[30px] sm:w-[40px] dark:hidden' src={Logo} alt="Logo" />
          <img className='w-[35px] sm:w-[45px] hidden dark:block' src={LogoDark} alt="Logo Dark" />
          <span className='text-xl sm:text-2xl font-mon font-bold text-black dark:text-white'>JasX</span>
        </a>

        <div className='flex items-center justify-end md:gap-[30px]'>
          <button onClick={handleChangeTheme} className='border-[1px] p-[11px] rounded-lg border-black dark:border-white border-opacity-30 dark:hover:bg-white hover:bg-black hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-100 delay-150'>{mode}</button>

          <div className='border-[1px] py-[10px] px-[10px] rounded-lg border-black dark:border-white border-opacity-30 duration-100 delay-150 flex items-center gap-2 sm:block'>
            <Link className='px-[12px] py-[4px] dark:hover:bg-white hover:bg-black hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-100 delay-150 rounded-lg text-base text-black dark:text-white' to='/login'>Login</Link>
            
            <Link className='px-[12px] py-[4px] rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-base text-white' to='/signup'>Signup</Link>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <img className='w-[50px] h-[50px] rounded-full sm:hidden block' src={User} alt="" />
            </AlertDialogTrigger>

            <AlertDialogContent className='w-[300px] dark:bg-[#1F2937] shadow-md bg-[#F3F4F6]'>
              <AlertDialogHeader>
                <AlertDialogTitle className='text-center'>Registiration</AlertDialogTitle>
              </AlertDialogHeader>

              <div className='border-[1px] py-[6px] px-[10px] rounded-lg border-black dark:border-white border-opacity-30 duration-100 delay-150 flex items-center gap-2 justify-center w-[200px] m-auto'>
                <Link className='px-[12px] py-[4px] dark:hover:bg-white hover:bg-black hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-100 delay-150 rounded-lg text-base text-black dark:text-white' to='/login'>Login</Link>
            
                <AlertDialogCancel className='m-auto'>Cancel</AlertDialogCancel>

                <Link className='px-[12px] py-[4px] rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-base text-white' to='/signup'>Signup</Link>
              </div>

            <AlertDialogFooter>
          <AlertDialogCancel className='m-auto'>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </div>
      </div>
    </nav>
  );
}