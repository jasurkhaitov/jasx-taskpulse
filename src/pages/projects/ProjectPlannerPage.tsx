import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function ProjectPlannerPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Project Planner`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sed libero earum iusto itaque asperiores at tempora soluta ea accusantium amet doloribus eaque atque, sit quaerat eius, debitis pariatur quibusdam consequatur. Ipsam molestias natus illo perspiciatis laboriosam corporis reprehenderit totam fugiat. Id molestiae iste sint sapiente voluptatem totam at perspiciatis.
				</main>
			</div>
		</SidebarProvider>
	)
}
