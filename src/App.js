import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import Testimonial from "./components/Testimonial";
import BoostSection from "./components/BoostSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <div className="main_container">
          <HeroSection />
          <InputSection />
        </div>
        <Testimonial />
        <BoostSection />
      </main>
      <footer className="footer">
        <FooterSection />
      </footer>
    </>
  );
}

export default App;
