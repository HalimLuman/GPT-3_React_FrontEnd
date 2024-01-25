import React from 'react'
import { Navbar, Brand, CTA} from "./components/index";
import { Blog, Features, Header, Footer, Possibility, WhatGPT3} from "./containers/index";
import './App.css';

const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App