import Home from '@/components/home/Home'
// import Sidebar from '@/components/shared/Sidebar'

export default function HomePage() {
	return (
		<div className='flex w-full'>
			{/* <Sidebar/> */}

			<div className='flex-1 h-full overflow-y-auto'>
				<Home/>
			</div>
		</div>
	)
}