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
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">We create amazing things</p>
          <Button color="primary" variant="ghost">
            Learn More
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
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">More About Us</h2>
            <p className="text-xl mb-8 ml-4 mr-4">
              Here is some more information about what we do
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get in Touch
            </button>
          </div>
        </div>
        {/* Put text Here */}
        <h2 className="text-3xl bold">Test</h2>
      </div>
    </>
  );
};

export default Home;
