import Project from '@/components/projects/Project'
import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function ProjectPlannerPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Project Planner`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen w-full'>
				<ProjectSidebar />

				<main className='flex-1 h-full overflow-y-auto'>
					<Project />
				</main>
			</div>
		</SidebarProvider>
	)
}
