import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Lenis from 'lenis';

import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import ScrollToTop from './components/ui/ScrollToTop';

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-white text-black font-sora selection:bg-[#ff4d00] selection:text-white">

        <div className="grain"></div>

        <AnimatePresence mode='wait'>
          {isLoading && <Preloader setLoading={setIsLoading} />}
        </AnimatePresence>

        <ToastContainer position="bottom-right" theme="light" />

        <Navbar />

        <main className="w-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
