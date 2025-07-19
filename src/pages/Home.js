

import Hero from "../components/Hero";
import ProudlyDesigned from "../components/ProudlyDesigned.js";
import Portfolio from "../components/Portfolio.js";
import Services from "../components/Services/Services.js";
import MockupStore from "../components/mockup store/MockupStore.js";
import BestPlans from "../components/best plans/BestPlans.js";
import WhyClientsLove from "../components/Why Client Love/WhyClientsLove.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";


function Home({navbar}) {
 


  return (
  <>
 
   {navbar}
    <Hero/>
     <Hero/>
    <ProudlyDesigned/>
    <Portfolio/>
    <Services/>
    <MockupStore/>
    <BestPlans/>
    <WhyClientsLove/>
    <Contact/>
    <Footer/>
    
 
  </>
  );
}

export default Home;
