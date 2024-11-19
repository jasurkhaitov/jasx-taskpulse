import Navbar from '@/components/browse/Navbar'
import { SignUp } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function Register() {

	useEffect(() => {
		document.title = "Register | TaskPulse"
	}, [])

	return (
		<div className='w-full h-screen font-roboto'>
			<Navbar />

			<div className='max-w-[1150px] px-[15px] mx-auto flex h-screen justify-center items-center'>
				<SignUp signInUrl='/sign-in'/>
			</div>
		</div>
	)
}