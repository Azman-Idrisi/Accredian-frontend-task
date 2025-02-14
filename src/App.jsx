import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Refer from "./components/Refer";
import ReferralBenefits from "./components/ReferralBenefits";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Refer />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
