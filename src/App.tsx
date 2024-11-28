import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { MyGlobalContext } from './hooks/useContext'
import PrivateRoute from './routes/Outlet'

import HomePage from './pages/home/HomePage'
import BrowsePage from './pages/browse/BrowsePage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/profile/ProfilePage'
import ProjectPlannerPage from './pages/projects/ProjectPlannerPage'
import ReadingPage from './pages/reading/ReadingPage'
import HabitTrackerPage from './pages/habitTracker/HabitTrackerPage'
import BudgetPage from './pages/budget/BudgetPage'
import JournalPage from './pages/journal/JournalPage'
import WeeklyToDoPage from './pages/weeklyToDo/WeeklyToDoPage'
import Signin from './pages/auth/Signin'
import Register from './pages/auth/Register'

function App() {
	const [user, setUser] = useState(false)

	return (
		<MyGlobalContext.Provider value={{ user, setUser }}>
			<Routes>
				<Route path='/' element={<BrowsePage />} />
				<Route path='*' element={<NotFoundPage />} />

				<Route path='/sign-in' element={<Signin/>} />
				<Route path='/sign-up' element={<Register/>}/>

				<Route path='/documents' element={<PrivateRoute />}>
					<Route path='/documents' element={<HomePage />} />

					<Route path='/documents/weekly-to-do-list' element={<WeeklyToDoPage />} />
					<Route path='/documents/journal' element={<JournalPage />} />
					<Route path='/documents/monthly-budget' element={<BudgetPage />} />
					<Route path='/documents/habit-tracker' element={<HabitTrackerPage />} />
					<Route path='/documents/reading-book' element={<ReadingPage />} />
					<Route path='/documents/projects' element={<ProjectPlannerPage />} />
					
					<Route path='/documents/profile' element={<ProfilePage />} />
				</Route>
			</Routes>
		</MyGlobalContext.Provider>
	)
}

export default App
