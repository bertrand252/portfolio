import Lanyard from "./components/Lanyard/lanyard";
import BlurText from "./components/BlurText/BlurText";
import PillNav from "./components/PillNav/PillNav";
import logo from "./assets/pillNav/logoW.svg";
import Threads from "./components/Threads/Threads";

function App() {
  return (
    <div className="bg-stone-950">
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pt-4">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          baseColor="#ffffff"
          pillColor="#000000"
          hoveredPillTextColor="#000000"
          pillTextColor="#ffffff"
        />
      </div>

      <div className="flex justify-center items-center min-h-screen z-40 relative">
        <BlurText
          text="Bertrand Leonard"
          delay={400}
          animateBy="words"
          direction="top"
          stepDuration={0.8}
          className="blur-text text-8xl text-center font-bold text-white font-sans"
          rootMargin="0px"
        />
      </div>

      <div className="absolute top-50 right-0 left-0 bottom-0 w-full h-[600px] z-10">
        <Threads
          color={[1, 1, 1]}
          amplitude={0.8}
          distance={0.3}
          enableMouseInteraction={false}
        />
      </div>
    </div>
  );
}
export default App;