import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { DayColumn } from '@/typescript/type'
import { IoMdAddCircleOutline } from 'react-icons/io'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'
import AddWeeklyActivity from './AddWeeklyActivity'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useToast } from '@/hooks/use-toast'

export default function DailyActivites() {
	const [columns, setColumns] = useState<DayColumn[]>([
		{
			day: 'Monday',
			tasks: [
				{ id: '1', text: 'Call Mom', completed: false },
				{ id: '2', text: 'Book appt', completed: false },
				{ id: '3', text: 'To-do', completed: true },
				{ id: '1', text: 'Call Mom', completed: false },
				{ id: '2', text: 'Book appt', completed: false },
				{ id: '3', text: 'To-do', completed: true },
				{ id: '1', text: 'Call Mom', completed: false },
				{ id: '2', text: 'Book appt', completed: false },
				{ id: '3', text: 'To-do', completed: true },
				{ id: '1', text: 'Call Mom', completed: false },
				{ id: '2', text: 'Book appt', completed: false },
				{ id: '3', text: 'To-do', completed: true },
			],
		},
		{
			day: 'Tuesday',
			tasks: [
				{ id: '4', text: 'To-do', completed: true },
				{ id: '5', text: 'To-do', completed: false },
				{ id: '6', text: 'To-do', completed: false },
			],
		},
		{
			day: 'Wednesday',
			tasks: [
				{ id: '7', text: 'To-do', completed: false },
				{ id: '8', text: 'To-do', completed: true },
				{ id: '9', text: 'To-do', completed: true },
			],
		},
		{
			day: 'Thursday',
			tasks: [
				{ id: '10', text: 'To-do', completed: false },
				{ id: '11', text: 'To-do', completed: false },
				{ id: '12', text: 'To-do', completed: false },
			],
		},
		{
			day: 'Friday',
			tasks: [
				{ id: '13', text: 'To-do', completed: false },
				{ id: '14', text: 'To-do', completed: false },
				{ id: '15', text: 'To-do', completed: false },
			],
		},
		{
			day: 'Saturday',
			tasks: [
				{ id: '16', text: 'To-do', completed: false },
				{ id: '17', text: 'To-do', completed: false },
				{ id: '18', text: 'To-do', completed: false },
			],
		},
		{
			day: 'Sunday',
			tasks: [
				{ id: '19', text: 'To-do', completed: false },
				{ id: '20', text: 'To-do', completed: false },
				{ id: '21', text: 'To-do', completed: false },
			],
		},
	])

	const toggleTask = (columnIndex: number, taskIndex: number) => {
		const newColumns = [...columns]
		newColumns[columnIndex].tasks[taskIndex].completed =
			!newColumns[columnIndex].tasks[taskIndex].completed
		setColumns(newColumns)
	}

	const {toast} = useToast()

	const handeDelete = (task: string, day: string) => {
		toast({
			description: (
				<>
					<strong>"{task}"</strong> task successfully removed from <strong>{day}</strong>.
				</>
			),
		})
	}	

	return (
		<div
			className='grid gap-4'
			style={{
				gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
				gridAutoRows: 'minmax(250px, auto)',
			}}
		>
			{columns.map((column, columnIndex) => (
				<Card key={column.day} className='flex flex-col bg-card'>
					<CardHeader className='pb-3 flex flex-row justify-between items-center gap-5 border-b-[0.25px] border-gray-500 dark:border-gray-800'>
						<CardTitle className='text-lg font-semibold text-center w-auto'>
							{column.day}
						</CardTitle>

						<Dialog>
							<DialogTrigger>
								<button className='w-auto'>
									<IoMdAddCircleOutline className='text-2xl' />
								</button>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader>
									<DialogTitle>Add New Week for {column.day}</DialogTitle>
								</DialogHeader>

								<AddWeeklyActivity day={column.day} />
							</DialogContent>
						</Dialog>
					</CardHeader>

					<CardContent className='space-y-1 weeklyDailyActivityContainer overflow-y-scroll h-[200px]'>
						{column.tasks.map((task, taskIndex) => (
							<div
								key={task.id}
								className='flex group/task cursor-pointer rounded p-2 hover:bg-bgLightBox dark:hover:bg-bgDarkBox items-center justify-between'
							>
								<div className='flex space-x-2 items-center'>
									<Checkbox
										checked={task.completed}
										onCheckedChange={() => toggleTask(columnIndex, taskIndex)}
									/>
									<label
										className={cn(
											'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:cursor-text',
											task.completed && 'line-through text-muted-foreground'
										)}
									>
										{task.text}
									</label>
								</div>

								<RiDeleteBin6Line onClick={() => handeDelete(task.text, column.day)} className='text-red-600 hidden group-hover/task:block'/>
							</div>
						))}
					</CardContent>
				</Card>
			))}
		</div>
	)
}
