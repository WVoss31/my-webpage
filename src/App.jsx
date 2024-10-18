import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import { ThemeProvider } from "next-themes";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div>
          <Nav />
        </div>
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
