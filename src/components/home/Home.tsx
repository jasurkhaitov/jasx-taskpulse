import { SidebarTrigger } from '../ui/sidebar'
import HomeJournal from './HomeJournal'
import HomeMonthlyBudget from './HomeMonthlyBudget'
import HomeWeeklyToDoList from './HomeWeeklyToDoList'
import HomeProjectPlanner from './HomeProjectPlanner'
import HomeReadingBook from './HomeReadingBook'

export default function Home() {
	return (
		<div className='space-y-3 px-5 py-3'>
			<div className='flex items-center justify-between px-5'>
				<h3 className='text-xl font-bold'>Home</h3>

				<SidebarTrigger />
			</div>

			<div className='w-full'>
				<HomeMonthlyBudget />
			</div>

			<div className='grid grid-cols-2 items-stretch gap-3'>
				<HomeProjectPlanner />

				<HomeWeeklyToDoList />
				
				<HomeJournal />

				<HomeReadingBook/>
			</div>
		</div>
	)
}
