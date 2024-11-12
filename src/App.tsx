import { Route, Routes, useNavigate } from 'react-router-dom'
import Browse from './pages/Browse'
import NotFound from './pages/NotFound'
import Document from './components/Document'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'

function App() {

	const {userId, isLoaded} = useAuth()

	const navigate = useNavigate()

	console.log(userId);
	console.log(isLoaded);

	useEffect(() => {
    if (isLoaded && userId) {
      navigate('/')
    }
  }, [isLoaded])

	return (
		<Routes>
			<Route path='/' element={<Browse/>}/>
			<Route path='/doc' element={<Document/>} />
			
			<Route path='*' element={<NotFound/>}/>
		</Routes>
	)
}

export default App;