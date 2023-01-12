import React from 'react';
import {motion} from "framer-motion";

const Footer = ({title, desc, imgDark, imgLight}) => {
    return (
        <footer className={"footer"}>
           <div className={"footer__img-container"}>
               <motion.img initial={{scale:1.5, x:70, y:70}} whileInView={{scale:1, x:0, y:0}} transition={{duration:1.5, ease:"easeOut"}}   src={imgDark} alt="" className="footer__left-img"/>
           </div>
            <div className="footer__content">
                <h3 className="footer__title">{title}</h3>
                <p className="footer__desc">{desc}</p>
            </div>
           <div className={"footer__img-container"}>
               <motion.img initial={{scale:1.5, x:-70, y:70}} whileInView={{scale:1, x:0, y:0}} transition={{duration:1.5, ease:"easeOut"}}   src={imgLight} alt="" className="footer__right-img"/>
           </div>
        </footer>
    );
};

export default Footer;