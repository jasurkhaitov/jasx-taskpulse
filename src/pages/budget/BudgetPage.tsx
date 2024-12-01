import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function BudgetPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Monthly Budget`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex perspiciatis libero similique perferendis quae molestiae, minima illum! Quasi eveniet sapiente exercitationem. Voluptatibus harum libero quibusdam nesciunt maxime repudiandae, iste provident, nobis beatae repellat perspiciatis quos animi laboriosam totam. Asperiores doloribus saepe nam id fugiat reprehenderit mollitia atque aperiam quaerat?
				</main>
			</div>
		</SidebarProvider>
	)
}
