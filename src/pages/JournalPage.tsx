import Home from '@/components/home/Home'
import { ProjectSidebar } from '@/components/shared/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function JournalPage() {

	const {user} = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Journal`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<Home title={'Journal Page'}/>
				</main>
			</div>
		</SidebarProvider>
	)
}