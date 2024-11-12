import { GoMoveToTop } from 'react-icons/go'

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className='font-roboto text-gray-600 dark:text-gray-300 shadow-md dark:shadow-xl border-t border-gray-300 dark:border-gray-800'>
			<div className='max-w-[1280px] px-[15px] mx-auto flex justify-between py-4 items-center'>
				<div className='flex items-center justify-start gap-2'>
					<p className='text-sm text-gray-500 gap-1 flex items-center'>
						<span>© 2024 TaskPulse — </span>

						<a
							href='https://t.me/jasurkhaitov'
							className='text-blue-600'
							rel='noopener noreferrer'
							target='_blank'
						>
							@jasurkhaitov
						</a>
					</p>

					<div className='w-[1px] h-5 hidden md:block bg-gray-500'></div>

					<p className='text-sm hidden md:block text-gray-500'>
						All right reserved.
					</p>
				</div>

				<button
					onClick={scrollToTop}
					className='border border-gray-600 rounded-sm dark:border-gray-500 p-2 hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200'
				>
					<GoMoveToTop className='text-lg text-gray-600 dark:text-gray-500' />
				</button>
			</div>
		</footer>
	)
}
