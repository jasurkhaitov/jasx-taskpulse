import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function JournalPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Journal`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis nihil, magni illo ipsum commodi praesentium omnis, voluptatibus repellat dolorum nulla assumenda obcaecati? Inventore quia quasi quidem. Voluptatem, adipisci inventore?</p>
				</main>
			</div>
		</SidebarProvider>
	)
}
