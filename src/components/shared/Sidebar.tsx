import { cn } from '@/lib/utils'
import Logo from '../../assets/svg/logoIcon.svg'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link, useLocation } from 'react-router-dom'
import { CommandDialogDemo } from './SearchCommand'

import { LuHome } from 'react-icons/lu'
import { FaListUl } from 'react-icons/fa'
import { BsJournalRichtext } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { MdDoneAll } from 'react-icons/md'
import { RiBookMarkedLine } from 'react-icons/ri'
import { GoProjectRoadmap } from 'react-icons/go'

import { SettingsCommand } from './SettingsCommand'
import { HelpSupport } from './HelpSupport'
import { useUser } from '@clerk/clerk-react'

export function ProjectSidebar() {
	const location = useLocation()
	const pathname = location.pathname

	const { user } = useUser()

	return (
		<Sidebar className='border-r'>
			<SidebarHeader className='py-4'>
				<Link
					to='/documents'
					className='flex mb-4 px-10 items-center gap-0 sm:gap-2 text-gray-900 dark:text-white'
				>
					<img
						loading='lazy'
						className='w-7'
						src={Logo}
						alt='Icon of JasX Brand'
					/>

					<span className='text-xl hidden sm:block font-space font-bold'>
						JasX
					</span>
				</Link>

				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents'
								className={cn(pathname === '/documents' && 'bg-background')}
							>
								<LuHome className='mr-1 h-4 w-4' />
								Home
								<SidebarMenuBadge>6</SidebarMenuBadge>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<CommandDialogDemo />
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent className='px-2 mt-2'>
				<SidebarGroupLabel className='px-5'>Projects</SidebarGroupLabel>

				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/weekly-to-do-list'
								className={cn(
									pathname === '/documents/weekly-to-do-list' && 'bg-background'
								)}
							>
								<FaListUl className='mr-1 h-4 w-4' />
								Weekly To-do List
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/journal'
								className={cn(pathname === '/documents/journal' && 'bg-background')}
							>
								<BsJournalRichtext className='mr-1 h-4 w-4' />
								Journal
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/monthly-budget'
								className={cn(pathname === '/documents/monthly-budget' && 'bg-background')}
							>
								<BiMoneyWithdraw className='mr-1 h-5 w-6 text-xl' />
								Monthly Budget
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/habit-tracker'
								className={cn(pathname === '/documents/habit-tracker' && 'bg-background')}
							>
								<MdDoneAll className='mr-1 h-4 w-4' />
								Habit Tracker
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/reading-list'
								className={cn(pathname === '/documents/reading-list' && 'bg-background')}
							>
								<RiBookMarkedLine className='mr-1 h-4 w-4' />
								Reading List
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/project-planner'
								className={cn(pathname === '/documents/project-planner' && 'bg-background')}
							>
								<GoProjectRoadmap className='mr-1 h-4 w-4' />
								Project Planner
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>

			<SidebarFooter className='p-2'>
				<SidebarMenu>
					<SidebarMenuItem>
						<SettingsCommand />
					</SidebarMenuItem>

					<SidebarMenuItem>
						<HelpSupport />
					</SidebarMenuItem>

						<Link className={cn('flex items-center justify-start gap-3 cursor-pointer mt-2 pb-2 px-3 pt-4 border-t border-gray-400 dark:border-gray-700')} to={'/documents/profile'}>
							<img loading='lazy' className='w-10 h-auto rounded-md' src={user?.imageUrl} alt={`${user?.fullName}`}/>

							<div>
								<p className='text-blue-500 text-[14px]'>{user?.primaryEmailAddress?.emailAddress}</p>

								<p className='text-[12px]'>{user?.fullName}</p>
							</div>
						</Link>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
