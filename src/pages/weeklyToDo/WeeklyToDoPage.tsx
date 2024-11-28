import Home from '@/components/home/Home'
import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function WeeklyToDoPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Weekly To Do List`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<Home title={'Weekly To Do App'} />
				</main>
			</div>
		</SidebarProvider>
	)
}
