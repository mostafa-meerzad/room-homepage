import React from 'react';

const Footer = ({title, desc, imgDark, imgLight}) => {
    return (
        <footer className={"footer"}>
            <img src={imgDark} alt="" className="footer__left-img"/>
            <div className="footer__content">
                <h3 className="footer__title">{title}</h3>
                <p className="footer__desc">{desc}</p>
            </div>
            <img src={imgLight} alt="" className="footer__right-img"/>
        </footer>
    );
};

export default Footer;