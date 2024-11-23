import notFoundImg from '../assets/web/notFound.webp'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/browse/Navbar'

export default function NotFoundPage() {
	useEffect(() => {
		document.title = "The page you're looking for doesn't exist"
	}, [])

	return (
		<div className='w-full h-screen font-roboto'>
			<Navbar />

			<div className='max-w-[1150px] px-[15px] mx-auto flex h-screen md:flex-row justify-center flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 flex flex-col mb-16 md:mb-0 items-center text-center'>
					<h2 className='sm:text-5xl text-3xl font-medium text-green-500'>
						Oops !
					</h2>

					<h3 className='my-3 sm:text-3xl text-2xl font-medium text-red-500'>
						404 - Page Not Found
					</h3>

					<p className='mb-5 leading-relaxed'>
						Something went wrong. The page you're looking for doesn't exist.
					</p>

					<Link
						to={'/'}
						className={`inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-md font-semibold leading-relaxed`}
					>
						Back to Home
					</Link>
				</div>

				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img
						loading='lazy'
						className='object-cover object-center rounded-2xl'
						alt='Hero Image'
						src={notFoundImg}
					/>
				</div>
			</div>
		</div>
	)
}
