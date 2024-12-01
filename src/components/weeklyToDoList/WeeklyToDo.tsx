import { SidebarTrigger } from '../ui/sidebar'
import CoverImage from '../../assets/cover.webp'
import { Button } from '../ui/button'
import { IoMdTime } from 'react-icons/io'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import AddNewWeek from './AddNewWeek'
import WeekList from './WeekList'

import { FaListUl } from "react-icons/fa6";

export default function WeeklyToDo() {
	return (
		<div className='space-y-3 px-5 py-3'>
			<div className='flex items-center justify-between px-5'>
				<h3 className='text-xl font-bold'>Weekly To-do List</h3>

				<SidebarTrigger />
			</div>	

			<img
				className='rounded-sm w-full h-auto'
				src={CoverImage}
				alt='Weekly To Do List Cover Image'
			/>

			<div className='flex flex-col md:flex-row items-start justify-between gap-10 p-5'>
				<div>
					<h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2'>
						Weekly To-do List
					</h3>

					<p className='text-gray-600 dark:text-gray-400 text-sm tracking-wide font-space mb-3'>
						You can organize tasks by week. Each day of the week has its own
						section, and users can track progress by checking off completed
						tasks. Simple, intuitive, and great for staying organized !
					</p>

					<Dialog>
						<DialogTrigger>
							<Button variant='outline'><FaListUl className='text-xl'/> New Week</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Create New Week</DialogTitle>
								<DialogContent>
									<AddNewWeek />
								</DialogContent>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>

				<div className='space-y-3'>
					<div className='flex items-center gap-2'>
						<div className='w-3 h-2.5 bg-blue-500 rounded-[1px]'></div>
						<p className='text-gray-700 dark:text-gray-300 flex items-center gap-2'>
							Overall:{' '}
							<span className='font-bold text-gray-900 dark:text-white flex items-center'>
								7 weeks
							</span>
						</p>
					</div>
					<div className='flex items-center gap-2'>
						<div className='w-3 h-2.5 bg-green-500 rounded-[1px]'></div>
						<p className='text-gray-700 dark:text-gray-300 flex items-center gap-2'>
							Completed:{' '}
							<span className='font-bold text-gray-900 dark:text-white'>
								75%
							</span>
						</p>
					</div>

					<div className='flex items-center gap-2'>
						<div className='w-3 h-2.5 bg-red-500 rounded-[1px]'></div>
						<p className='text-gray-700 dark:text-gray-300 flex items-center gap-2'>
							Uncompleted:{' '}
							<span className='font-bold text-gray-900 dark:text-white'>
								25%
							</span>
						</p>
					</div>

					<div className='flex items-center gap-2'>
						<IoMdTime />

						<span className='text-sm'>{new Date().toLocaleTimeString()}</span>
					</div>
				</div>
			</div>
			
			<WeekList/>
		</div>
	)
}