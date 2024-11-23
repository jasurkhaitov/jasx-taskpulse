import * as React from 'react'
import { HelpCircle } from 'lucide-react'

import { CommandDialog } from '@/components/ui/command'
import { SidebarMenuButton } from '../ui/sidebar'
import { cn } from '@/lib/utils'
import FormRequest from './FormRequest'

export function HelpSupport() {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<SidebarMenuButton onClick={() => setOpen(open => !open)} className='w-full' asChild>
				<button className={cn('bg-transparent')}>
					<HelpCircle className='mr-1 h-4 w-4' />
					Help & Support
				</button>
			</SidebarMenuButton>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<div className='p-5'>
					<FormRequest />
				</div>
			</CommandDialog>
		</>
	)
}
