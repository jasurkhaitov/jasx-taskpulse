import Home from '@/components/home/Home'
import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function HomePage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Home`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen w-full'>
				<ProjectSidebar />

				<main className='flex-1 h-full overflow-y-auto'>
					<Home title={'Home'} />
				</main>
			</div>
		</SidebarProvider>
	)
}
