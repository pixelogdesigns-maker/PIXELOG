import React from 'react';
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Work from "../components/sections/Work";
import WhyUs from "../components/sections/WhyUs";
import About from "../components/sections/About";
import Partners from "../components/sections/Partners";
import Contact from "../components/sections/Contact";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Work />
            <WhyUs />
            <About />
            <Partners />
            <Contact />
        </>
    );
};

export default Home;
