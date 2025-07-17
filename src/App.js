import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initAOS } from "./Scripts/aosAnimation.js";
import { initNavbarScroll } from './Scripts/navbarScroll.js';

import Preloader from "./components/Preloader.js";
import Home from "./pages/Home.js";
import ContactForm from "./pages/contact form/ContactForm.js";
import Navbar from "./components/Navbar.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initAOS();
    const cleanup = initNavbarScroll();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

  const navbar = <Navbar />;

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <BrowserRouter basename="/Blennex-website">
            <Routes>
              <Route path="/" element={<Home navbar={navbar} />} />
              <Route path="/contact" element={<ContactForm navbar={navbar} />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
