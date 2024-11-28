import Navbar from '@/components/browse/Navbar'
import { SignIn } from '@clerk/clerk-react'

export default function Signin() {
	return (
		<>
			<Navbar/>

			<div className='flex items-center justify-center w-full h-screen'>
				<SignIn signUpUrl='/sign-up'/>
			</div>
		</>
	)
}