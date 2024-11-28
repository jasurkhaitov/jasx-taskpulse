import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { UserProfile, useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function ProfilePage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s Profile`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen w-full'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto flex items-center w-full justify-center h-screen'>
					<UserProfile />
				</main>
			</div>
		</SidebarProvider>
	)
}
