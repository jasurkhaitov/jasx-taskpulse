import * as React from 'react'
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from 'lucide-react'

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command'
import { SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { IoSearch } from 'react-icons/io5'
import { cn } from '@/lib/utils'

export function CommandDialogDemo() {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
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
						<IoSearch className='mr-1 h-4 w-4' />
						Search
						<SidebarMenuBadge className='font-mono'> ⌘ K</SidebarMenuBadge>
					</button>
				</SidebarMenuButton>
			</SidebarMenuItem>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />

				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='Suggestions'>
						<CommandItem>
							<Calendar />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<Smile />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<Calculator />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading='Settings'>
						<CommandItem>
							<User />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCard />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
