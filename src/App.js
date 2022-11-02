import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";

function App() {
  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <HeroSection />
        <InputSection />
      </main>
    </>
  );
}

export default App;
