import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import Testimonial from "./components/Testimonial";
import BoostSection from "./components/BoostSection";
import FooterSection from "./components/FooterSection";
import isURL from "validator/lib/isURL";

function App() {
  const [shortLink, setShortLink] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [shortedLink, setShortedLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!shortLink || !isURL(shortLink)) {
      return setIsError((current) => !current);
    }

    const handleFetchData = async () => {
      const response = await fetch(`${BASE_URL}${shortLink}`);
      const data = await response.json();
      console.log(data.result);
      setShortedLink(data.result.full_short_link);
      setOriginalLink(data.result.original_link);
    };

    setCopied("");
    setShortedLink("");
    setShortLink("");
    setIsError(false);
    handleFetchData();
  };

  return (
    <>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <div className="main_container">
          <HeroSection />
          <InputSection
            isError={isError}
            shortLink={shortLink}
            setShortLink={setShortLink}
            handleSubmit={handleSubmit}
            setShortedLink={setShortedLink}
          />
        </div>
        <Testimonial
          originalLink={originalLink}
          shortedLink={shortedLink}
          copied={copied}
          setCopied={setCopied}
        />
        <BoostSection />
      </main>
      <footer className="footer">
        <FooterSection />
      </footer>
    </>
  );
}

export default App;
