import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initAOS } from "./Scripts/aosAnimation.js";
import { initNavbarScroll } from './Scripts/navbarScroll.js'; //

import Preloader from "./components/Preloader.js";
import Home from "./pages/Home.js";
import ContactForm from "./pages/contact form/ContactForm.js";
import Navbar from "./components/Navbar.js";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initAOS();
    
    // Initialize navbar scroll handler
    const cleanup = initNavbarScroll(); // 

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Cleanup scroll listener on unmount
    return () => {
      clearTimeout(timer);
      cleanup(); // 
    };
  }, []);
  const navbar = <Navbar/>

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home navbar = {navbar} />} />
              <Route path="/contact" element={<ContactForm navbar={navbar} />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;