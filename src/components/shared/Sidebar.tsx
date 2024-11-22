import { cn } from '@/lib/utils'
import { ChevronsLeft, MenuIcon } from 'lucide-react'
import { ElementRef, useEffect, useRef, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const Sidebar = () => {
	const sidebarRef = useRef<ElementRef<'div'>>(null)
	const navbarRef = useRef<ElementRef<'div'>>(null)
	const isResizing = useRef(false)

	const isMobile = useMediaQuery("(max-width:800px)")

	const [isCollapsed, setIsCollapsed] = useState(false)
	const [isResetting, setIsResetting] = useState(false)

	useEffect(() => {
		if(isMobile) {
			collapse()
		} else {
			reset()
		}
	}, [isMobile])

	const collapse = () => {
		if (sidebarRef.current && navbarRef.current) {
			setIsCollapsed(true)
			setIsResetting(true)

			sidebarRef.current.style.width = '0'
			navbarRef.current.style.width = "100%"
			navbarRef.current.style.left = "0"
			setTimeout(() => setIsResetting(false), 300);
		}
	}

	const reset = () => {
		if (sidebarRef.current && navbarRef.current) {
			setIsCollapsed(false)
			setIsResetting(true)

			sidebarRef.current.style.width = '240px'
			navbarRef.current.style.width = "calc(100%-240px)"
			navbarRef.current.style.left = "240px"
			setTimeout(() => setIsResetting(false), 300);
		}
	}

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault()
		event.stopPropagation()

		isResizing.current= true
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)
	}

	const handleMouseMove = (event: MouseEvent) => {
    if (!isResizing.current) return;

    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 400) newWidth = 400;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.left = `${newWidth}px`;
      navbarRef.current.style.width = `calc(100% - ${newWidth}px)`;
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

	return (
		<>
			<div
				className={cn(
          "group/sidebar h-screen bg-secondary overflow-y-auto flex w-60 flex-col z-50 sticky left-0 top-0",
          isResetting && "transition-all ease-in duration-300"
        )}
				ref={sidebarRef}
			>
				<div
					className='h-7 w-7 flex items-center justify-center text-muted-foreground rounded-sm hover:bg-gray-240 dark:hover:bg-gray-800 absolute top-3 right-2 cursor-pointer group-hover/sidebar:opacity-100 opacity-0 transition'
					role='button'
					onClick={collapse}
				>
					<ChevronsLeft className='h-7 w-7' />
				</div>

				<div className='group-hover/sidebar:opacity-100 absolute right-0 top-0 w-1 h-full cursor-ew-resize bg-primary/10 opacity-0 transition' onMouseDown={handleMouseDown}/>
			</div>

			<div className={cn("absoluten top-0 z-50 left-60 w-[calc(100% - 240px)]", isResetting && 'transition-all ease-in duration-240')} ref={navbarRef}>
				<nav className='bg-transparent px-3 py-3 w-full'>
					{
						isCollapsed && <MenuIcon className='w-6 h-6 text-muted-foreground' role='button' onClick={reset}/>
					}
				</nav>
			</div>
		</>
	)
}

export default Sidebar;