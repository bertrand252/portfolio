import React from "react";
import Lanyard from "./components/Lanyard/lanyard";
import BlurText from "./components/BlurText/BlurText";
import PillNav from "./components/PillNav/PillNav";
import logo from "./assets/logo.svg";


function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <BlurText
          text="Bertrand Leonard"
          delay={400}
          animateBy="words"
          direction="top"
          stepDuration={1.2}
          onAnimationComplete={handleAnimationComplete}
          className="blur-text text-8xl text-center font-bold text-black font-sans"
          rootMargin="0px"
        />
      </div>
      <div>
        <PillNav
  logo={logo}
  logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>
      </div>
    </div>
  );
}
export default App;
