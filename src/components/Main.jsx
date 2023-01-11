import React from 'react';
import {AngleLeft, AngleRight, Arrow} from "../icons";

const Main = ({desktopSrc, mobileSrc, title, desc, setPageNum, pageNum, maxPageNum, minPageNum}) => {
    const handleNext = ()=>{
        if(pageNum < maxPageNum) setPageNum(pageNum + 1)
    }
    const handlePrev = ()=>{
        if(pageNum > minPageNum) setPageNum(pageNum - 1)
    }
    return (
        <main className={"main"}>
            <picture className="main__img">
                <source media="(min-width: 1440px)" srcSet={desktopSrc}/>
                <source media="(min-width: 375px)" srcSet={mobileSrc}/>
                <img src={mobileSrc} alt=""/>
            </picture>
            <div className="main__content">
                <h2 className="main__title">{title}</h2>
                <p className="main__desc">{desc}</p>

                <div className="main__btn-container">
                    <button className="main__btn" onClick={handlePrev}><AngleLeft/></button>
                    <button className="main__btn" onClick={handleNext}><AngleRight/></button>
                </div>
                <button className="main__btn-show">
                    <span>
                        shop now
                    </span>
                    <Arrow/>
                </button>
            </div>
        </main>
    );
};

export default Main;