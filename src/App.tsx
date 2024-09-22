import { useState, useEffect } from "react"
import { GlobalContent, MyGlobalContext } from "@/hooks/Context"
import Login from "@/components/mainPage/Login"
import Signup from "@/components/mainPage/Signup"
import { Route, Routes } from "react-router-dom"
import NotFound from '@/components/NotFound'
import PrivateRoute from '@/hooks/Outlet'
import Mainpage from '@/pages/Mainpage'
import HomePage from '@/pages/HomePage'

export default function App() {
  const initialTheme = localStorage.getItem('theme') || 'dark'

  const [theme, setTheme] = useState<string>(initialTheme)
  const [user, setUser] = useState<boolean>(false) 
  const [sidebarWidth, setSidebarWidth] = useState<number>(300)
  const [activeBar, setActiveBar] = useState<boolean>(true)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const contextValue: GlobalContent = {
    themeChange: theme,
    setThemeChange: setTheme,
    
    user: user,
    setUser: setUser,

    sidebarWidth: sidebarWidth,
    setSidebarWidth: setSidebarWidth,

    activeBar: activeBar,
    setActiveBar: setActiveBar
  }

  return (
    <MyGlobalContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

        <Route path='documents' element={<PrivateRoute />}>
          <Route path="/documents" element={<HomePage/>} />
        </Route>
      </Routes>
    </MyGlobalContext.Provider>
  )
}