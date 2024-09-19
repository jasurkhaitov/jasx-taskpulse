import { useState, useEffect } from "react";
import { GlobalContent, MyGlobalContext } from "@/context/Context";
import Login from "@/components/mainPage/Login";
import Signup from "@/components/mainPage/Signup";
import { Route, Routes, Navigate } from "react-router-dom";
import Mainpage from "./Mainpage";

export default function Register() {
  const initialTheme = localStorage.getItem('theme') || 'dark';

  const [theme, setTheme] = useState<string>(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const contextValue: GlobalContent = {
    themeChange: theme,
    setThemeChange: setTheme,
  };

  return (
    <MyGlobalContext.Provider value={contextValue}>
      <div className={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/browse" replace />} />
          
          <Route path="/browse" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </MyGlobalContext.Provider>
  );
}