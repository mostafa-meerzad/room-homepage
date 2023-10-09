import { useState } from "react";

import { dataHero } from "./constants.js";

import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

import "./styles/style.css";

const App = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleNext = () => {
    setCurrentTab((prevTab) =>
      currentTab === dataHero.length - 1 ? 0 : prevTab + 1
    );
  };
  const handlePrev = () => {
    setCurrentTab((prevTab) =>
      currentTab === 0 ? dataHero.length - 1 : prevTab - 1
    );
  };

  
  return (
    <>
      <Header />
      <main>
        <Hero
          currentTab={currentTab}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        <About />
      </main>
    </>
  );
};

export default App;
