import { ThemeProvider } from "@/components/theme-provider"
import Mainpage from "./pages/Mainpage"

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <Mainpage/>
    </ThemeProvider>
  )
}

export default App;