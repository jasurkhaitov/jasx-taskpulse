import { createContext, useContext } from "react"

export type GlobalContent = {
    themeChange: string
    setThemeChange: (c: string) => void

    user: boolean
    setUser: (user: boolean) => void

    sidebarWidth: number,
    setSidebarWidth: (_sidebarWidth: number) => void

    activeBar: boolean
    setActiveBar: (user: boolean) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
    themeChange: 'dark',
    setThemeChange: () => {},

    user: false,
    setUser: (_user: boolean) => { },

    sidebarWidth: 300,
    setSidebarWidth: (_sidebarWidth: number) => {},

    activeBar: true,
    setActiveBar: (_activeBar: boolean) => { },
})

export const useGlobalContext = () => useContext(MyGlobalContext)