import HomeJournal from './HomeJournal'
import HomeMonthlyBudget from './HomeMonthlyBudget'
import HomeWeeklyToDoList from './HomeWeeklyToDoList'
import HomeProjectPlanner from './HomeProjectPlanner'
import HomeReadingBook from './HomeReadingBook'
import DocumentNavbar from '../shared/DocumentNavbar'

export default function Home() {
	return (
		<div className='space-y-3 px-5 py-3'>
			<DocumentNavbar title='Home'/>

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
