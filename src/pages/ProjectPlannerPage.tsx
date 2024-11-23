import Home from '@/components/home/Home'
import { ProjectSidebar } from '@/components/shared/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function ProjectPlannerPage() {

	const {user} = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Project Planner`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<Home title={'Project Planner'} />
				</main>
			</div>
		</SidebarProvider>
	)
}