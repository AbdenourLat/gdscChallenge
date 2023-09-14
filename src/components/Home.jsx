import React from 'react';
import Navbar from "./Navbar";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import "./Home.css";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <HeroPage></HeroPage>
            <Footer></Footer>
        </div>
    )
}

export default Home;
