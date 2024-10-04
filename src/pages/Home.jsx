import { useRef } from "react";
import { Button } from "@nextui-org/react";
import Hero from "../components/Hero";
import { useIsVisible } from "../helpers/IsIntersecting";

const Home = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <>
      <Hero title="Under Active Development" subtitle="Please check back later" action="About Me" />
      {/* Beginning of Animated Cover Page */}
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div ref={ref} className={`text-center transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
            <h2 className="text-4xl font-bold mb-4">About this Webpage</h2>
            <p className="text-xl mb-8 ml-4 mr-4">
              Read about the technology stack and development process
            </p>
            <Button color="primary">View Devlog</Button>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mt-5">Preview My Projects</h2>
        <div>
          {/* Cards go Here */}
        </div>
    </>
  );
};

export default Home;
