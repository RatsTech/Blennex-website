import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { initAOS } from "./Scripts/aosAnimation.js";
import ProudlyDesigned from "./components/ProudlyDesigned.js";
import Portfolio from "./components/Portfolio.js";
import Services from "./components/Services/Services.js";
import MockupStore from "./components/mockup store/MockupStore.js";
import BestPlans from "./components/best plans/BestPlans.js";
import WhyClientsLove from "./components/Why Client Love/WhyClientsLove.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {

  useEffect(() => {
    initAOS();
  }, []);


  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <ProudlyDesigned/>
    <Portfolio/>
    <Services/>
    <MockupStore/>
    <BestPlans/>
    <WhyClientsLove/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
