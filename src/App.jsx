import { Routes, Route, useNavigate } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import Nav from './components/Nav';
import Home from './pages/Home';
import Test from './pages/Test';
import Projects from './pages/Projects';

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App
