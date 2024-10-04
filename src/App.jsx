import { Routes, Route, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import { ThemeProvider } from "next-themes";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div>
          <Nav />
          <Routes>
            <Route path="/my-webpage" element={<Home />} />
            <Route path="/my-webpage/education" element={<Education />} />
            <Route path="/my-webpage/projects" element={<Projects />} />
          </Routes>
        </div>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
