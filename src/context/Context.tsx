import { createContext, useContext } from "react"

export type GlobalContent = {
    themeChange: string
    setThemeChange:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    themeChange: 'dark', // set a default value
    setThemeChange: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)