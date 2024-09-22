import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle'
import Sidebar from '@/components/document/Sidebar'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { MyGlobalContext } from '@/hooks/Context'

function HomePage() {
	const location = useLocation()
	const {sidebarWidth, setSidebarWidth, setActiveBar} = useContext(MyGlobalContext)
	const [isResizing, setIsResizing] = useState(false)

	const handleMouseDown = (_e: React.MouseEvent) => {
		setIsResizing(true)
		setActiveBar(false)
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (isResizing) {
			const newWidth = e.clientX
			setSidebarWidth(newWidth)
		}
	}
	
	const handleMouseUp = () => {
		setIsResizing(false)
		setActiveBar(true)
	}

	useEffect(() => {
		document.title = 'Home Page | Taskpulse'
	})

	useEffect(() => {
		if (isResizing) {
			window.addEventListener("mousemove", handleMouseMove)
			window.addEventListener("mouseup", handleMouseUp)
		} else {
			window.removeEventListener("mousemove", handleMouseMove)
			window.removeEventListener("mouseup", handleMouseUp)
		}
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
			window.removeEventListener("mouseup", handleMouseUp)
		}
	}, [isResizing])

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

			<div className="flex h-screen">
				<div className="" style={{ width: `${sidebarWidth}px`, minWidth: "100px", maxWidth: "300px" }} >
					<Sidebar email={location.state?.email} userName={location.state?.userName} />
				</div>

				<div className="w-[5px] bg-lightBox cursor-col-resize" onMouseDown={handleMouseDown}
				></div>

				<div className="flex-1 p-4">
					<ModeToggle />

				</div>
			</div>

		</ThemeProvider>
	)
}

export default HomePage;