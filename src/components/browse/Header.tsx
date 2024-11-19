import { Link } from 'react-router-dom'
import HeaderImage from '../../assets/web/header-image.webp'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

export default function Header() {
	return (
		<section className='text-gray-600 mt-20 dark:text-gray-300 font-roboto'>
			<div className='max-w-[1150px] px-[15px] mx-auto flex py-20 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<div className='border-black items-center dark:border-white border-opacity-30 duration-100 delay-150 border-[0.25px] inline-block px-3 py-[6px] rounded-3xl bg-[#E5E7EB] dark:bg-[#1F2937]'>
						<span className='text-white leading-relaxed text-sm mr-2 border-none bg-blue-500 inline-block px-2 rounded-xl'>
							New
						</span>

						<p className='text-black dark:text-white text-sm leading-relaxed inline-block'>
							Write, plan and organize
						</p>
					</div>

					<h1 className='title-font sm:text-4xl text-3xl my-4 font-medium text-gray-900 dark:text-gray-100'>
						All-of-them in one space
					</h1>

					<p className='mb-5 leading-relaxed'> Take control of your tasks with a platform built for individuals. Stay organized, set clear goals, and track progress all in one place. This tool helps you stay focused and productive. </p>

					<div className='flex items-center'>
						<SignedOut>
							<Link to={'/sign-in'} className={`py-[9px] px-5 rounded-sm text-md font-semibold text-white flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 active:scale-95`} >
								Get Started
							</Link>
						</SignedOut>

						<SignedIn>
							<Link to={'/documents'} className={`inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-md font-semibold leading-relaxed`} >
								Documents
							</Link>
						</SignedIn>
					</div>
				</div>

				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img loading='lazy' className='object-cover object-center rounded-2xl' alt='Hero Image' src={HeaderImage} />
				</div>
			</div>
		</section>
	)
}
