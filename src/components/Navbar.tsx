import { iconSvg } from '@/utilits/icon'
import Logo from '../assets/logo.png'
import LogoDark from '../../public/JasX.png'
import { useContext, useState } from 'react'
import { MyGlobalContext } from '@/context/Context'

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


export default function Navbar() {

  const [mode, setMode] = useState(iconSvg.sun)

  const {themeChange, setThemeChange} = useContext(MyGlobalContext)

  const handleChangeTheme = () => {
    mode == iconSvg.sun ? setMode(iconSvg.moon) : setMode(iconSvg.sun)
    themeChange == 'dark' ? setThemeChange('') : setThemeChange('dark')
  }

  return (
    <nav className='dark:bg-[#1F2937] bg-[#F3F4F6] border-black border-b-2 dark:border-white border-opacity-20'>
        <div className='flex xl:w-[1200px] items-center justify-between m-auto px-[15px] md:px-[30px] py-3 md:py-5'> 
            <a href="/" className='flex items-center justify-center gap-2'>
              <img className='w-[30px] sm:w-[40px] dark:hidden' src={Logo} alt="" />
              <img className='w-[35px] sm:w-[45px] hidden dark:block' src={LogoDark} alt="" />
              <span className='text-xl sm:text-2xl font-mon font-bold text-black dark:text-white'>JasX</span>
            </a>

            <div className='flex items-center justify-end md:gap-[30px]'>
                <button onClick={handleChangeTheme} className='border-[1px] p-[10px] rounded-lg border-black dark:border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 duration-100 delay-150 rounded-[10px'>{mode}</button>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <button className='hidden items-center gap-1 px-[15px] md:flex py-[10px] border-none bg-btnBlue rounded-lg font-roboto text-white font-[400] text-base active:scale-90'>{iconSvg.user} Sign up</button>
                  </AlertDialogTrigger>

                    <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog> 
            </div>
        </div>
    </nav>
  )
}