import { ProjectSidebar } from '@/components/shared/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { UserProfile, useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function ProfilePage() {

	const {user} = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s Profile`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<UserProfile/>
				</main>
			</div>
		</SidebarProvider>
	)
}