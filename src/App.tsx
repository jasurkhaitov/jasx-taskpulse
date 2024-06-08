import { useState } from "react";
import Mainpage from "./pages/Mainpage";
import { GlobalContent, MyGlobalContext } from "./context/Context";

function App() {
  const [theme, setTheme] = useState<string>('dark'); // separate theme state

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