import Login from "@/components/mainPage/Login";
import Signup from "@/components/mainPage/Signup";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";

export default function Register() {
  return (
    <div>
        <Routes>
          <Route path="/" element={ <Mainpage/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/signup" element={ <Signup/> } />
        </Routes>
    </div>
  )
}