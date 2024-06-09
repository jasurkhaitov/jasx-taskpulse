import { useState, useEffect } from "react";
import Mainpage from "./pages/Mainpage";
import { GlobalContent, MyGlobalContext } from "./context/Context";

function App() {
  // Get the initial theme from localStorage or default to 'dark'
  const initialTheme = localStorage.getItem('theme') || 'dark';

  const [theme, setTheme] = useState<string>(initialTheme);

  // Update localStorage whenever the theme changes
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
        <Mainpage />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
