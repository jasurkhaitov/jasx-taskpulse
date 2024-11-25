import { Link } from 'react-router-dom'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'
import { homeReadingBookData } from '@/util/data'

export default function HomeReadingBook() {
	return (
		<Card className='flex flex-col bg-bgLightBox dark:bg-bgDarkBox'>
			<CardHeader className='items-center pb-0 mb-5'>
				<CardTitle>
					<Link
						to={'/documents/reading-book'}
						className='flex items-center gap-2'
					>
						Reading Book <HiMiniArrowTopRightOnSquare className='text-base' />
					</Link>
				</CardTitle>
				<CardDescription>
					List of Book you have read and give feedback
				</CardDescription>
			</CardHeader>

			<CardContent className='flex-1 space-y-5'>
				{homeReadingBookData.map(items => (
					<div
						className='flex items-center justify-between gap-3'
						key={items.id}
					>
						<Link to={items.slug} className='flex items-center justify-start gap-2'>
							<img
								className='w-[60px] h-[60px] rounded-lg object-cover'
								src={items.img}
								alt={items.title}
							/>
							<span>{items.title}</span>
						</Link>

						<span className='text-sm'>{items.data}</span>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
