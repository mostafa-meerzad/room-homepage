import React, {useState} from 'react';
import {Hamburger, Logo} from "../icons";
import {motion} from "framer-motion";

const headerData = ["Home", "Shop", "About", "Contact"]
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuVariants = {
        hidden:{
            x:"-100vw"
        }, visible:{
            x:0, transition:{
                staggerChildren:.2
            }
        }
    }
    const menuItemVariants = {
        hidden:{
            // x:-100
            opacity:0
        }, visible:{
            // x:0
            opacity:1
        }
    }
    return (
        <header className={"header"}>
            <Hamburger state={isMenuOpen} setState={setIsMenuOpen} className={"header__hamburger"}/>
            <Logo/>

            <motion.nav className="header__nav" variants={menuVariants} initial="hidden" animate={isMenuOpen ? "visible":"hidden"}>
                <ul className="header__menu">
                    {headerData.map((item, i) => {
                       return <motion.li className="header__menu-item" variants={menuItemVariants} key={i}>{item}</motion.li>
                    })}
                </ul>
            </motion.nav>
        </header>
    );
};

export default Header;