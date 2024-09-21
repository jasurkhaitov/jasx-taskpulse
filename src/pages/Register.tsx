import { useState, useEffect } from "react"
import { GlobalContent, MyGlobalContext } from "@/hooks/Context"
import Login from "@/components/mainPage/Login"
import Signup from "@/components/mainPage/Signup"
import { Route, Routes } from "react-router-dom"
import Mainpage from "./Mainpage"
import UserPage from './UserPage'
import NotFound from '@/components/NotFound'
import PrivateRoute from '@/hooks/Outlet'

export default function Register() {
  const initialTheme = localStorage.getItem('theme') || 'dark'

  const [theme, setTheme] = useState<string>(initialTheme)
  const [user, setUser] = useState<boolean>(false)  // Added state for user

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const contextValue: GlobalContent = {
    themeChange: theme,
    setThemeChange: setTheme,
    user: user,
    setUser: setUser,
  }

  return (
    <MyGlobalContext.Provider value={contextValue}>
      {/* <div className={theme}> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

        <Route path='documents' element={<PrivateRoute />}>
          <Route path="/documents" element={<UserPage />} />
        </Route>
      </Routes>
      {/* </div> */}
    </MyGlobalContext.Provider>
  )
}