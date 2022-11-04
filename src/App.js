import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import Testimonial from "./components/Testimonial";

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
      </main>
    </>
  );
}

export default App;
