import { SidebarTrigger } from '../ui/sidebar'
import HomeJournal from './HomeJournal'
import HomeMonthlyBudget from './HomeMonthlyBudget'
import HomeWeeklyToDoList from './HomeWeeklyToDoList'
import HomeProjectPlanner from './HomeProjectPlanner'
import HomeReadingBook from './HomeReadingBook'

export default function Home({ title }: { title: string }) {
	return (
		<div className='space-y-5 p-5'>
			<div className='flex items-center justify-between px-5'>
				<h3 className='text-2xl font-bold'>{title}</h3>

				<SidebarTrigger />
			</div>

			<div className='w-full'>
				<HomeMonthlyBudget />
			</div>

			<div className='w-full'>
				<HomeProjectPlanner />
			</div>

			<div className='w-full'>
				<HomeWeeklyToDoList />
			</div>

			<div className='grid grid-cols-2 items-stretch gap-5'>
				<HomeJournal />

				<HomeReadingBook/>
			</div>
		</div>
	)
}
