import { createContext, useContext } from "react"

export type GlobalContent = {
    themeChange: string
    setThemeChange: (c: string) => void

    user: boolean
    setUser: (user: boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    themeChange: 'dark',
    setThemeChange: () => { },

    user: false,
    setUser: (_user: boolean) => { }
})

export const useGlobalContext = () => useContext(MyGlobalContext)