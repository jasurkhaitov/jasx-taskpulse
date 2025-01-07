import { useState } from 'react'
import { format, addDays, parseISO } from 'date-fns'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'
import { RxLapTimer } from 'react-icons/rx'
import { WeekProps } from '@/typescript/type'
import DailyActivites from './DailyActivites'
import { Button } from '../ui/button'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'
import EditWeek from './EditWeek'
import DeleteWeek from './DeleteWeek'

export default function WeekDetail({ title, date, desc, time }: WeekProps) {
	const [isEditDialogOpen, setEditDialogOpen] = useState(false)
	const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false)

	function getWeekRange(startDate: string): string {
		const endDate = addDays(startDate, 6)
		const formattedStartDate = format(startDate, 'MMMM d')
		const formattedEndDate = format(endDate, 'MMMM d')

		return `${formattedStartDate} - ${formattedEndDate}`
	}

	function formatISODate(isoDateString: string): string {
		const date = parseISO(isoDateString)
		return format(date, 'MMMM d, yyyy h:mm a')
	}

	return (
		<Card className='bg-bgLightBox dark:bg-bgDarkBox w-full p-3'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<CardTitle className='text-2xl font-bold tracking-wide'>
						{title}
					</CardTitle>

					<div className='flex items-center gap-4'>
						<Dialog open={isEditDialogOpen} onOpenChange={setEditDialogOpen}>
							<DialogTrigger>
								<button className=''>
									<FaRegEdit className='text-xl' />
								</button>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										Change Weekly To-do List Information
									</DialogTitle>
								</DialogHeader>

								<EditWeek
									title={title}
									desc={desc}
									date={date}
									onClose={() => setEditDialogOpen(false)}
								/>
							</DialogContent>
						</Dialog>

						<Dialog
							open={isDeleteDialogOpen}
							onOpenChange={setDeleteDialogOpen}
						>
							<DialogTrigger>
								<Button className='w-[40px] p-2' variant={'destructive'}>
									<RiDeleteBin6Line />
								</Button>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader>
									<DialogTitle>Are you sure?</DialogTitle>
								</DialogHeader>
								<DeleteWeek
									title={title}
									onClose={() => setDeleteDialogOpen(false)}
								/>
							</DialogContent>
						</Dialog>
					</div>
				</div>

				<div className='flex items-center justify-between text-gray-800 dark:text-gray-100'>
					<p className='text-xl text-gray-500 dark:text-gray-400 font-semibold'>
						{getWeekRange(date)}
					</p>
					<p className='text-sm text-green-500 dark:text-green-400 flex items-center gap-2'>
						<RxLapTimer className='text-red-500' /> {formatISODate(time)}
					</p>
				</div>

				<CardDescription>{desc}</CardDescription>

				<div className='flex items-center justify-start gap-5'>
					<div className='flex items-center gap-2'>
						<div className='w-3 h-2.5 bg-green-500 rounded-[1px]'></div>
						<p className='text-gray-700 dark:text-gray-300 flex items-center gap-2'>
							Completed:{' '}
							<span className='font-bold text-gray-900 dark:text-white'>
								63%
							</span>
						</p>
					</div>

					<div className='flex items-center gap-2'>
						<div className='w-3 h-2.5 bg-red-500 rounded-[1px]'></div>
						<p className='text-gray-700 dark:text-gray-300 flex items-center gap-2'>
							Uncompleted:{' '}
							<span className='font-bold text-gray-900 dark:text-white'>
								37%
							</span>
						</p>
					</div>
				</div>
			</CardHeader>

			<CardContent className='p-0'>
				<DailyActivites />
			</CardContent>
		</Card>
	)
}
