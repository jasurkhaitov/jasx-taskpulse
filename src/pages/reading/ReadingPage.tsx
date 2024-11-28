import Home from '@/components/home/Home'
import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function ReadingPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Reading List`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<Home title={'Reading List'} />
				</main>
			</div>
		</SidebarProvider>
	)
}
