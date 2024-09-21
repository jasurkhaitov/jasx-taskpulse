import AccordionPage from "@/components/mainPage/Accordion"
import Footer from "@/components/mainPage/Footer"
import Header from "@/components/mainPage/Header"
import Main from "@/components/mainPage/Main"
import Navbar from "@/components/mainPage/Navbar"
import TabsComp from "@/components/mainPage/Tabs"
import { MyGlobalContext } from '@/hooks/Context'
import { useContext, useEffect } from 'react'

export default function Mainpage() {
  const { themeChange } = useContext(MyGlobalContext)

  useEffect(() => {
    document.title = "Product Management | TaskPulse"
  }, [])

  return (
    <div className="font-roboto">
      <div className={themeChange}>

        <Navbar />
        <Header />
        <Main />
        <TabsComp />
        <AccordionPage />
        <Footer />
      </div>
    </div>
  )
}