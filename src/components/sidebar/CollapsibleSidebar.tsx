import {
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '../ui/sidebar'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { GoProjectRoadmap } from 'react-icons/go'

export default function CollapsibleSidebar() {
	const data = [
		{
			title: 'Projects',
			url: '/documents/projects',
			items: [
				{
					title: 'Project 1',
					url: '#',
				},
				{
					title: 'Project 2',
					url: '#',
				},
			],
		},
	]

	const location = useLocation()
	const pathname = location.pathname;

	return (
		<div>
			{data.map(item => (
				<div key={item.title}>
					<div className='flex items-center w-full'>
						<SidebarMenuButton asChild>
							<Link
								to={item.url}
								className={cn(
									'flex items-center w-full gap-2',
									pathname === `${item.url}` && 'bg-background'
								)}
							>
								<GoProjectRoadmap className='mr-1 h-4 w-4' />
								<span>{item.title}</span>
							</Link>
						</SidebarMenuButton>
					</div>

					<div className='ml-2 max-w-full w-full'>
						{item.items?.length ? (
							<SidebarMenuSub>
								{item.items.map(subItem => (
									<SidebarMenuSubItem key={subItem.title}>
										<SidebarMenuSubButton asChild className='px-4 py-1.5 text-sm hover:bg-background' >
											<Link to={subItem.url} className={cn(pathname === `${subItem.url}` ?  'bg-background text-white' : 'text-zinc-400')}>{subItem.title}</Link>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								))}
							</SidebarMenuSub>
						) : null}
					</div>
				</div>
			))}
		</div>
	)
}
