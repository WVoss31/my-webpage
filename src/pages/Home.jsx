import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/* Beginning of Hero Page */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(src/assets/space.jpg)" }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-xl mb-8">I make cool stuff</p>
          <Button color="primary" variant="ghost">
            About Me
          </Button>
        </div>
      </div>
      {/* Beginning of Animated Cover Page */}
      <div
        className={`transition-all duration-500 ${
          scrollY > window.innerHeight ? "relative top-0" : "relative"
        }`}
        style={{ top: `-${Math.min(scrollY, window.innerHeight)}px` }}
      >
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About this Webpage</h2>
            <p className="text-xl mb-8 ml-4 mr-4">
              Read about the technology stack and development process
            </p>
            <Button color="primary">View Devlog</Button>
          </div>
        </div>
        {/* Put text Here */}
        <h2 className="text-3xl bold">Test</h2>
      </div>
    </>
  );
};

export default Home;
