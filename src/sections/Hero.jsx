import { dataHero } from "../constants";
import { motion } from "framer-motion";
import Arrow from "../components/Arrow";
import AngleLeft from "../components/AngleLeft";
import AngleRight from "../components/AngleRight";
import { useState } from "react";


const AnimatedButton = ({ onClick, children }) => {
  const [isActive, setIsActive] = useState(false);
  const handleActiveStart = () => setIsActive(true);
  const handleActiveEnd = () => setIsActive(false);
  return (
    <motion.button
      aria-label={"button"}
      className="hero__btn"
      // control animation of child arrows
      onMouseUp={handleActiveEnd}
      onMouseDown={handleActiveStart}
      onTouchStart={handleActiveStart}
      onTouchEnd={handleActiveEnd}
      onClick={onClick}
    >
      <motion.div animate={isActive ? { scale: 0.9 } : { scale: 1 }}>
        {children}
      </motion.div>
    </motion.button>
  );
};

const Hero = ({ currentTab, handleNext, handlePrev }) => {
  // move shop-now button hover-state into a state for animation purposes
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // initial={{scale:1.5}} animate={{scale:1}} transition={{duration:.5}} key={currentTab}
  return (
    <motion.section className={"hero"}>

     {/* <div> */}
       {/* <div style={{border:"2px solid red", width:"100px", height:"100px", backgroundColor:"gray", zIndex:10}}></div> */}
     <picture className="hero__picture" key={currentTab}>
        <source
          media="(max-width: 375px)"
          srcSet={dataHero[currentTab]["mobileImg"]}
        />
        <source
          media="(min-width: 376px)"
          srcSet={dataHero[currentTab]["desktopImg"]}
        />
        <img src={dataHero[currentTab]["desktopImg"]} alt="" />
      </picture>

     {/* </div> */}
      <div className="hero__btn-container">
        <AnimatedButton onClick={handlePrev}>{<AngleLeft />}</AnimatedButton>
        <AnimatedButton onClick={handleNext}>{<AngleRight />}</AnimatedButton>
      </div>

      <div className="hero__content">
        <h2 className="hero__title">{dataHero[currentTab]["title"]}</h2>
        <p className="hero__desc">{dataHero[currentTab]["desc"]}</p>

        <motion.button
          className="hero__btn-show"

          onMouseEnter={handleHover}
          onTouchStart={handleHover}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
          whileTap={{scale:.98}}
        >
          <span>shop now</span>
          <Arrow
            animate={
              isHovered ? { scale: 0.9, x: ".2rem" } : { x: 0, scale: 1 }
            }
          />
        </motion.button>
      </div>
    </motion.section>
  );
};
export default Hero;
