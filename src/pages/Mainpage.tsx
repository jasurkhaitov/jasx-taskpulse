import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Signup from "@/components/Signup";
import { Route, Routes } from "react-router-dom";

export default function Mainpage() {
  return (
    <div className="font-roboto">
      <Navbar/>

      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes>
    </div>
  )
}