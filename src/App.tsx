import { Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import NotFound from './pages/NotFound'
import Document from './components/Document'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'
import { MyGlobalContext } from './hooks/useContext'
import PrivateRoute from './routes/Outlet'

function App() {
	const [user, setUser] = useState(false)

	return (
		<MyGlobalContext.Provider value={{ user, setUser }}>
			<Routes>
				<Route path='/' element={<Browse />} />
				<Route path='*' element={<NotFound />} />

				<Route path='/sign-in' element={<Login />} />
				<Route path='/register' element={<Register />} />

				<Route path='/documents' element={<PrivateRoute />}>
					<Route path='/documents' element={<Document />} />
				</Route>
			</Routes>
		</MyGlobalContext.Provider>
	)
}

export default App
