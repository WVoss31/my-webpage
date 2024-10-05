import { Routes, Route, useNavigateFromYourRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import { ThemeProvider } from "next-themes";

function App() {
  const navigate = useNavigateFromYourRouter();
  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
