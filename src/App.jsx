import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import {dataMain, dataFooter} from "./data.jsx"

import "./styles/style.css"
import {AnimatePresence} from "framer-motion";
const maxPageNum = dataMain.length - 1
const minPageNum = 0
const App = () => {
    const [pageNum, setPageNum] = useState(0)
    return (
        <>
            <Header />
            <AnimatePresence>

            <Main title={dataMain[pageNum].title} desc={dataMain[pageNum].desc} desktopSrc={dataMain[pageNum].img[0]}
                  mobileSrc={dataMain[pageNum].img[1]} setPageNum={setPageNum} maxPageNum={maxPageNum} minPageNum={minPageNum} pageNum={pageNum} theKey={pageNum}/>
            </AnimatePresence>
            <Footer title={dataFooter.title} desc={dataFooter.desc} imgLight={dataFooter.imgAboutLight}
                    imgDark={dataFooter.imgAboutDart}/>

        </>
    );
};

export default App;