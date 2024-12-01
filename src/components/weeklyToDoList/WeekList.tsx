import { week } from '@/util/data'
import WeekDetail from './WeekDetail'

export default function WeekList() {

	return (
		<div className='flex flex-col gap-3 items-start'>
			{
				week.map(item => <WeekDetail key={item.id} {...item}/>)
			}
		</div>
	)
}