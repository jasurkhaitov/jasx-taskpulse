import Navbar from '@/components/browse/Navbar'
import { SignUp } from '@clerk/clerk-react'
export default function Register() {
	return (
		<>
			<Navbar/>

			<div className='flex items-center justify-center w-full h-screen'>
				<SignUp signInUrl='/sign-in'/>
			</div>
		</>
	)
}