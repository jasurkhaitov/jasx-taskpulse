import * as React from 'react'
import { Settings } from 'lucide-react'
import { CommandDialog } from '@/components/ui/command'
import { SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { cn } from '@/lib/utils'
import { ModeToggle } from '../providers/mode-toggle'

export function SettingsCommand() {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen(open => !open)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<>
			<SidebarMenuItem onClick={() => setOpen(open => !open)}>
				<SidebarMenuButton className='w-full' asChild>
					<button className={cn('bg-transparent')}>
						<Settings className='mr-1 h-4 w-4' />
						Settings
						<SidebarMenuBadge className='font-mono'> ⌘ I</SidebarMenuBadge>
					</button>
				</SidebarMenuButton>
			</SidebarMenuItem>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<div className='p-5'>
					<p className='text-2xl font-semibold border-b border-gray-400 dark:border-gray-900 mb-4 pb-4'>My Settings</p>

					<div className='flex items-center justify-between'>
						<div className='flex items-start flex-col'>
							<p className='text-lg font-normal'>Appearance</p>
							<p className='text-xs tracking-wide text-gray-400'>Customize how Taskpulse looks on your device</p>
						</div>

						<ModeToggle />
					</div>
				</div>
			</CommandDialog>
		</>
	)
}
