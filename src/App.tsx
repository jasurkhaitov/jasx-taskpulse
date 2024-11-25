import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { MyGlobalContext } from './hooks/useContext'
import PrivateRoute from './routes/Outlet'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import ProjectPlannerPage from './pages/ProjectPlannerPage'
import ReadingPage from './pages/ReadingPage'
import HabitTrackerPage from './pages/HabitTrackerPage'
import BudgetPage from './pages/BudgetPage'
import JournalPage from './pages/JournalPage'
import WeeklyToDoPage from './pages/WeeklyToDoPage'
import AboutPage from './pages/AboutPage'

function App() {
	const [user, setUser] = useState(false)

	return (
		<MyGlobalContext.Provider value={{ user, setUser }}>
			<Routes>
				<Route path='/' element={<BrowsePage />} />
				<Route path='*' element={<NotFoundPage />} />

				<Route path='/documents' element={<PrivateRoute />}>
					<Route path='/documents' element={<HomePage />} />

					<Route path='/documents/weekly-to-do-list' element={<WeeklyToDoPage />} />
					<Route path='/documents/journal' element={<JournalPage />} />
					<Route path='/documents/monthly-budget' element={<BudgetPage />} />
					<Route path='/documents/habit-tracker' element={<HabitTrackerPage />} />
					<Route path='/documents/reading-book' element={<ReadingPage />} />
					<Route path='/documents/project-planner' element={<ProjectPlannerPage />} />

					<Route path='/documents/about' element={<AboutPage />} />
					
					<Route path='/documents/profile' element={<ProfilePage />} />
				</Route>
			</Routes>
		</MyGlobalContext.Provider>
	)
}

export default App
