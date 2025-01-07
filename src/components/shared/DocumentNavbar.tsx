import { UserButton } from '@clerk/clerk-react'
import { SidebarTrigger } from '../ui/sidebar'

export default function DocumentNavbar({ title }: { title: string }) {
	return (
		<div className='flex items-center justify-between px-3'>
			<div className='flex items-center gap-2'>
				<SidebarTrigger />

				<div className='w-[1px] h-5 bg-black dark:bg-white'></div>

				<h3 className='text-xl font-bold ml-[10px]'>{title}</h3>
			</div>

			<UserButton />
		</div>
	)
}
