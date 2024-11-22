import { Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import { MyGlobalContext } from './hooks/useContext'
import PrivateRoute from './routes/Outlet'
import HomePage from './pages/HomePage'

function App() {
	const [user, setUser] = useState(false)

	return (
		<MyGlobalContext.Provider value={{ user, setUser }}>
			<Routes>
				<Route path='/' element={<Browse />} />
				<Route path='*' element={<NotFound />} />

				<Route path='/documents' element={<PrivateRoute />}>
					<Route path='/documents' element={<HomePage />} />
				</Route>
			</Routes>
		</MyGlobalContext.Provider>
	)
}

export default App
