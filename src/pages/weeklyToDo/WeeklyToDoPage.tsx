import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import WeeklyToDo from '@/components/weeklyToDoList/WeeklyToDo'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function WeeklyToDoPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Weekly To Do List`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen w-full'>
				<ProjectSidebar />

				<main className='flex-1 h-full overflow-y-auto'>
					<WeeklyToDo />
				</main>
			</div>
		</SidebarProvider>
	)
}
