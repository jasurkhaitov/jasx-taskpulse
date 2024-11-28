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
import { RiBookMarkedLine } from 'react-icons/ri'

import { SettingsCommand } from './SettingsCommand'
import { HelpSupport } from '../shared/HelpSupport'
import CollapsibleSidebar from './CollapsibleSidebar'
import { UserBox } from './UserBox'

export function ProjectSidebar() {
	const location = useLocation()
	const pathname = location.pathname

	return (
		<Sidebar className='border-r'>
			<SidebarHeader className='py-5'>
				<Link
					to='/'
					className='flex mb-5 px-5 items-center gap-0 sm:gap-2 text-gray-900 dark:text-white'
				>
					<img
						loading='lazy'
						className='w-7'
						src={Logo}
						alt='Icon of JasX Brand'
					/>

					<span className='text-xl font-space font-bold'> JasX </span>
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
								className={cn(
									pathname === '/documents/journal' && 'bg-background'
								)}
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
								className={cn(
									pathname === '/documents/monthly-budget' && 'bg-background'
								)}
							>
								<BiMoneyWithdraw className='mr-1 h-5 w-6 text-xl' />
								Monthly Budget
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to='/documents/reading-book'
								className={cn(
									pathname === '/documents/reading-book' && 'bg-background'
								)}
							>
								<RiBookMarkedLine className='mr-1 h-4 w-4' />
								Reading Book
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<CollapsibleSidebar />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>

			<SidebarFooter className='px-2 py-5'>
				<SidebarMenu>
					<SidebarMenuItem>
						<SettingsCommand />
					</SidebarMenuItem>

					<SidebarMenuItem>
						<HelpSupport />
					</SidebarMenuItem>

					<div className='mt-2 border-t pt-2'>
						<UserBox />
					</div>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
