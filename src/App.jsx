import React, {useState} from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import {dataMain, dataFooter} from "./data.jsx"

import "./styles/style.css"
const maxPageNum = dataMain.length - 1
const minPageNum = 0
const App = () => {
    const [pageNum, setPageNum] = useState(0)
    return (
        <>
            <Header />
            <Main title={dataMain[pageNum].title} desc={dataMain[pageNum].desc} desktopSrc={dataMain[pageNum].img[0]}
                  mobileSrc={dataMain[pageNum].img[1]} setPageNum={setPageNum} maxPageNum={maxPageNum} minPageNum={minPageNum} pageNum={pageNum}/>
            <Footer title={dataFooter.title} desc={dataFooter.desc} imgLight={dataFooter.imgAboutLight}
                    imgDark={dataFooter.imgAboutDart}/>

        </>
    );
};

export default App;