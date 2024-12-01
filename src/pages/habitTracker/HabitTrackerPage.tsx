import { ProjectSidebar } from '@/components/sidebar/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'

export default function HabitTrackerPage() {
	const { user } = useUser()

	useEffect(() => {
		document.title = `${user?.firstName}'s TaskPulse - Habit Tracker`
	}, [])

	return (
		<SidebarProvider>
			<div className='flex h-screen'>
				<ProjectSidebar />
				<main className='flex-1 overflow-y-auto p-2'>
					<SidebarTrigger />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita iusto alias obcaecati ab animi voluptatibus sequi, enim qui officiis voluptatem voluptas sit facere esse, quam autem nobis nulla consequuntur voluptates cupiditate quia. Eligendi corrupti ducimus quasi vero neque, iste, laboriosam explicabo sed, earum delectus doloribus omnis ad ipsum fuga?</p>
				</main>
			</div>
		</SidebarProvider>
	)
}
