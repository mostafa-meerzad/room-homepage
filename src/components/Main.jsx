import React, {useState} from 'react';
import {AngleLeft, AngleRight, Arrow} from "../icons";
import {motion} from "framer-motion";

const Main = ({desktopSrc, mobileSrc, title, desc, setPageNum, pageNum, maxPageNum, minPageNum, theKey}) => {
    const handleNext = () => {
        if (pageNum < maxPageNum) setPageNum(pageNum + 1)
    }
    const handlePrev = () => {
        if (pageNum > minPageNum) setPageNum(pageNum - 1)
    }
    const [isNextAnimating, setIsNextAnimating] = useState(false)
    const [isPrevAnimating, setIsPrevAnimating] = useState(false)
    const [isShopAnimating, setIsShopAnimating] = useState(false)
    return (

        <motion.main className={"main"} key={theKey}>
            <motion.div initial={{scale: 2, x: 50}} animate={{scale: 1, x: 0}}
                        transition={{duration: 1.5, ease: "easeOut"}} className="main__img-container">

                <picture className="main__img">
                    <source media="(min-width: 1440px)" srcSet={desktopSrc}/>
                    <source media="(min-width: 375px)" srcSet={mobileSrc}/>
                    <img src={mobileSrc} alt=""/>
                </picture>
            </motion.div>

            <div className="main__btn-container">
                <motion.button aria-label={"button"} className="main__btn" onClick={handlePrev} onMouseDown={() => {
                    setIsPrevAnimating(true)
                }} onMouseUp={() => {
                    setIsPrevAnimating(false)
                }}><AngleLeft animate={isPrevAnimating}/></motion.button>
                <motion.button aria-label={"button"} className="main__btn" onClick={handleNext} onMouseDown={() => {
                    setIsNextAnimating(true)
                }} onMouseUp={() => {
                    setIsNextAnimating(false)
                }}><AngleRight animate={isNextAnimating}/></motion.button>
            </div>
            <div className="main__content">
                <h2 className="main__title">{title}</h2>
                <p className="main__desc">{desc}</p>


                <motion.button whileTap={{color: "gray"}} onMouseDown={() => {
                    setIsShopAnimating(true)
                }} onMouseUp={() => {
                    setIsShopAnimating(false)
                }} className="main__btn-show">
                    <span>
                        shop now
                    </span>
                    <Arrow animate={isShopAnimating}/>
                </motion.button>
            </div>

        </motion.main>
    );
};

export default Main;