import { Route, Routes } from 'react-router-dom'
import Asd from './components/mainPage/Asd'
import Register from "./pages/Register";

function App() {
  return (
    <div className="font-roboto">
      <Register />

      <Routes>
        <Route path='/user' element={<Asd/>}/>
      </Routes>
    </div>
  );
}

export default App;