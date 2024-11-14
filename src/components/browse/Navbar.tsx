import { Link } from 'react-router-dom'
import { ModeToggle } from '../providers/mode-toggle'
import Logo from '../../assets/svg/logoIcon.svg'
import { LuContact } from 'react-icons/lu'
import {
	SignedIn,
	SignUpButton,
	SignedOut,
	UserButton,
	SignIn,
	SignUp,
} from '@clerk/clerk-react'
import { FaRegUser } from 'react-icons/fa'
import { styleUI } from '@/util/data'

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogCancel, // Import the cancel component
} from '@/components/ui/alert-dialog'

export default function Navbar() {
	return (
		<header className='font-roboto bg-background text-gray-600 fixed top-0 left-0 w-full z-10 dark:text-gray-300 shadow-md dark:shadow-xl border-b border-transparent dark:border-gray-800'>
			<div className='max-w-[1280px] px-[15px] mx-auto flex justify-between py-4 items-center'>
				<Link
					to='/'
					className='flex items-center gap-0 sm:gap-2 text-gray-900 dark:text-white'
				>
					<img
						loading='lazy'
						className='w-[40px]'
						src={Logo}
						alt='Icon of JasX Brand'
					/>

					<span className='text-xl hidden sm:block font-space font-bold'>
						JasX
					</span>
				</Link>

				<nav className='flex items-center space-x-3 sm:space-x-5'>
					<ModeToggle />

					<a
						href='http://t.me/jasurkhaitov'
						target='_blank'
						className='p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200'
					>
						<LuContact className='text-xl text-gray-700 dark:text-gray-300' />
					</a>

					<SignedOut>
						<AlertDialog>
							<AlertDialogTrigger>
								<button
									className={`text-sm hidden sm:block font-space font-medium text-black dark:text-white`}
								>
									Login
								</button>
							</AlertDialogTrigger>

							<AlertDialogContent>
								<div className='flex justify-end'>
									<AlertDialogCancel className='text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'>
										&times;
									</AlertDialogCancel>
								</div>
								<SignIn />
							</AlertDialogContent>
						</AlertDialog>
					</SignedOut>

					<SignedOut>
						<AlertDialog>
							<AlertDialogTrigger>
								<button className={`${styleUI.gradientButton}`}>
									<FaRegUser className='text-sm	text-white' />

									<span className='text-sm font-space font-medium text-white'>
										Sign Up
									</span>
								</button>
							</AlertDialogTrigger>

							<AlertDialogContent>
								<div className='flex justify-end'>
									<AlertDialogCancel className='text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'>
										&times;
									</AlertDialogCancel>
								</div>
								<SignUp />
							</AlertDialogContent>
						</AlertDialog>
					</SignedOut>

					<SignedIn>
						<UserButton />
					</SignedIn>
				</nav>
			</div>
		</header>
	)
}