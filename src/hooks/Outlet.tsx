import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { MyGlobalContext } from './Context'

const PrivateRoute = () => {
	const { user } = useContext(MyGlobalContext)

	if (!user) {
		return <Navigate to="/login" />
	}

	return <Outlet />
}

export default PrivateRoute