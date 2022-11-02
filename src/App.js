import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <HeroSection />
        <InputSection />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
