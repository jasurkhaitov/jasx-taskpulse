import AccordionPage from "@/components/mainPage/Accordion";
import Footer from "@/components/mainPage/Footer";
import Header from "@/components/mainPage/Header";
import Main from "@/components/mainPage/Main";
import Navbar from "@/components/mainPage/Navbar";
import TabsComp from "@/components/mainPage/Tabs";

export default function Mainpage() {
  return (
    <div className="font-roboto">
      <Navbar/>
      <Header/>
      <Main/>
      <TabsComp/>
      <AccordionPage/>
      <Footer/>
    </div>
  )
}