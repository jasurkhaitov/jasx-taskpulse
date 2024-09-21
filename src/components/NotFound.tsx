import Navbar from './mainPage/Navbar'
import notFoundImg from '../assets/notFound.webp'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyGlobalContext } from '@/hooks/Context'

export default function NotFound() {

	const { themeChange } = useContext(MyGlobalContext)

	useEffect(() => {
		document.title = 'Page not Found | TaskPulse'
	}, [])

	let navigate = useNavigate()

	return (
		<div className={themeChange}>
			<Navbar />

			<div className={`dark:bg-[#111827] bg-white w-full`}>
				<div className="2xl:w-[1400px] flex laptopmd:flex-row flex-col items-center justify-between xl:w-[1200px] m-auto px-[15px] md-[75px] pt-[100px] laptopmd:pt-[150px] md:pt-[200px] pb-[75px] laptopmd:pb-[100px] md:pb-[100px] laptopmd:gap-[15px] tablet:gap-[50px] 2xl:gap-0 h-screen xxsm:h-full laptopmd:h-screen">

					<img src={notFoundImg} className='w-full xxsm:w-[90%] smm:w-[70%] m-auto laptopmd:w-1/2' alt="Page Not Found 404" />

					<div className='text-center mt-[30px] laptopmd:mt-0 w-full laptopmd:w-1/2'>
						<h2 className='text-3xl xxsm:text-5xl font-bold text-gray-800 dark:text-white'>Oops !</h2>
						<h3 className='text-2xl xxsm:text-4xl font-bold text-green-500 dark:text-green-700 tracking-wide font-mono'>Something went wrong</h3>

						<p className='text-sm xxsm:text-md text-gray-800 dark:text-gray-200'>The page you were looking for is not there.</p>

						<button className='bg-gradient-to-r from-blue-500 to-pink-500 px-[15px] xxsm:px-[20px] py-[10px] xxsm:py-[13px] rounded-md text-lg 1200px:text-lg font-bold text-white mt-10' onClick={() => navigate('/')}>Back to Home</button>
					</div>
				</div>
			</div>
		</div>
	)
}