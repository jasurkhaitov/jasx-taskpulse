import { arrow } from '@/util/icon'
import logoBar from '../../assets/logo.webp'
import { useContext } from 'react'
import { MyGlobalContext } from '@/hooks/Context'

export default function Sidebar(props: { email: string, userName: string }) {
	
	const {setSidebarWidth, activeBar, setActiveBar} = useContext(MyGlobalContext)

	const changeSidebar = () => {
		if(activeBar) {
			setActiveBar(false)
			setSidebarWidth(100)
		} else {
			setActiveBar(true)
			setSidebarWidth(300)
		}
	}

	return (
		<aside className='h-screen py-5 px-2 border-r border-white'>
			<div>
				<div className='flex items-center justify-between pb-3 border-b border-black dark:border-white'>
					<img className='w-10' src={logoBar} alt="Logo Icon for user" />

					<button onClick={changeSidebar}>
						{ activeBar ? arrow.left : arrow.right}
					</button>
				</div>

				<div>

				</div>

			</div>

			<p>{props.email}</p>
			<p>{props.userName}</p>
		</aside>
	)
}