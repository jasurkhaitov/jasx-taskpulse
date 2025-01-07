import { IoMdTime } from 'react-icons/io'
import CoverImage from '../../assets/cover.webp'
import DocumentNavbar from '../shared/DocumentNavbar'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { GoProjectRoadmap } from 'react-icons/go'

export default function Project() {
	return (
		<div className='space-y-3 px-5 py-3'>
			<DocumentNavbar title='Projects' />

			<img
				className='rounded-sm w-full h-auto'
				src={CoverImage}
				alt='Project Cover Image'
			/>

			<div className='flex flex-col md:flex-row items-start justify-between gap-10 p-5'>
				<div>
					<h3 className='text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2'>
						Projects
					</h3>

					<p className='text-gray-600 dark:text-gray-400 text-sm tracking-wide font-space mb-3'>
						<span className='font-bold text-black dark:text-white'>Project Management</span> featuring an integrated Kanban board system. Users can create and manage multiple projects, each with tasks organized into categories like To-Do, In Progress, Completed, and Produced !
					</p>

					<Dialog>
						<DialogTrigger>
							<Button variant='outline'>
								<GoProjectRoadmap className='text-xl' /> New Project
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Create New Week</DialogTitle>
								<GoProjectRoadmap />
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
		</div>
	)
}
