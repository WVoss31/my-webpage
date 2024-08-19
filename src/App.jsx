import { Routes, Route, useNavigate } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App
