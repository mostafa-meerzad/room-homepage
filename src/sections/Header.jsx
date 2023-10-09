import { useState } from "react";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import { headerLinks } from "../constants";

const Hamburger = ({ handleClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      aria-label="menu"
      className={"header__hamburger"}
      onClick={handleClick}
    >
      <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
          fill="#FFF"
          fillRule="evenodd"
        />
      </svg>
    </motion.button>
  );
};

const Close = ({ handleClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      aria-label="close"
      onClick={handleClick}
      className="header__close"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
          fill="#000"
          fillRule="evenodd"
          opacity=".201"
        />
      </svg>
    </motion.button>
  );
};

const HeaderLink = ({ name, href, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <motion.li
      className="header__menu-item"
      variants={variants}
      whileTap={{ scale: 0.9 }}
    >
      <a href={href}>{name}</a>
    </motion.li>
  );
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const menuItemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <header className={"header"}>
      <Hamburger handleClick={() => setIsMenuOpen(true)} />
      <Logo />
      <motion.nav
        className="header__nav"
        variants={menuVariants}
        animate={isMenuOpen ? "visible" : "hidden"}
      >
        <Close handleClick={() => setIsMenuOpen(false)} />
        <ul className="header__menu">
          {headerLinks.map((link) => (
            <HeaderLink {...link} key={link.name} variants={menuItemVariants} />
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};
export default Header;
