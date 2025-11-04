import Lanyard from "./components/Lanyard/lanyard";
import BlurText from "./components/BlurText/BlurText";
import PillNav from "./components/PillNav/PillNav";
import logo from "./assets/pillNav/logoW.svg";
import Threads from "./components/Threads/Threads";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import TextType from "./components/TextType/TextType";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import techLogos from "./components/LogoLoop/LogoList";
import CardSwap, { Card } from "./components/CardSwap/CardSwap";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-stone-950 scroll-smooth">
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pt-4">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "About", href: "#about" },
            { label: "Project", href: "#project" },
            { label: "Achievement", href: "#achievement" },
            { label: "Contact", href: "#contact" },
          ]}
          baseColor="#ffffff"
          pillColor="#000000"
          hoveredPillTextColor="#000000"
          pillTextColor="#ffffff"
        />
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen z-40 relative space-y-4">
        <BlurText
          text="Bertrand Leonard"
          delay={400}
          animateBy="words"
          direction="top"
          stepDuration={0.8}
          className="blur-text text-8xl text-center font-bold text-white font-sans"
          rootMargin="0px"
        />
        <BlurText
          text="黃輝宏"
          delay={400}
          animateBy="words"
          direction="bottom"
          stepDuration={0.8}
          className="blur-text text-5xl text-center font-bold text-white font-sans"
          rootMargin="0px"
        />
      </div>


      <div>
        <section id="about"></section>
        <ScrollFloat
          animationDuration={1}
          containerClassName="flex justify-center items-center h-96 -translate-y-32"
          textClassName="text-[5rem] text-center font-bold text-white font-sans"
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=20%"
          stagger={0.1}
        >
          ABOUT
        </ScrollFloat>
      </div>

      <div className="absolute top-50 right-0 left-0 bottom-0 w-full h-[600px] z-10">
        <Threads
          color={[1, 1, 1]}
          amplitude={0.8}
          distance={0.3}
          enableMouseInteraction={false}
        />
      </div>

      <div className="grid grid-cols-9 grid-rows-5 gap-0 -mt-48">
        <div className="col-span-4 row-span-3 col-start-2 text-white flex flex-col space-y-4">
          <section id="about"></section>
          <TextType
            className="text-[3rem] font-bold text-white font-sans"
            text={[
              "Hi there! I'm Bertrand.",
              "A Computer Science student!",
              "很高興認識你們 !",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-[1.2rem] text-justify font-semimedium">
            I’m a passionate Computer Science student at Tamkang University who
            enjoys solving problems and turning ideas into reality. My interests
            range from web development and database systems to creative
            pixel-styled designs. I love the process of learning new
            technologies, experimenting with design, and building projects that
            not only look good but also make life easier. Outside of coding, I
            enjoy photography, working out, and playing billiards activities
            that keep me balanced and inspired to create even more.
          </p>
          <a href="CV.pdf" download="CV.pdf">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Download My Resume
            </button>
          </a>
        </div>
        <div className="col-span-3 row-span-3 col-start-7 text-white">
          <TiltedCard
            imageSrc="./src/assets/me.jpg"
            captionText="Bertrand Leonard"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="350px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={true}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
      <div>
        <ScrollFloat
          animationDuration={1}
          containerClassName="flex justify-center items-center h-96 -translate-y-32"
          textClassName="text-[5rem] text-center font-bold text-white font-sans"
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=20%"
          stagger={0.03}
        >
          LANGUAGE & TOOLS
        </ScrollFloat>
      </div>
      <div className="h-[200px] relative overflow-hidden -mt-48">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={90}
          gap={50}
          pauseOnHover
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#0c0a09"
          logoColor="white"
          ariaLabel="Technology partners"
        />
      </div>

      <div>
        <section id="project"></section>
        <ScrollFloat
          animationDuration={1}
          containerClassName="flex justify-center items-center h-96 -translate-y-32"
          textClassName="text-[5rem] text-center font-bold text-white font-sans"
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=20%"
          stagger={0.03}
        >
          PROJECTS
        </ScrollFloat>
      </div>

      <div className="grid grid-cols-9 grid-rows-5 gap-0 -mt-48">
        <div className="col-span-3 row-span-3 col-start-2 text-white flex flex-col space-y-4">
          <p className="text-[1.2rem] text-justify font-semimedium">
            Here are some of the projects I've been working on. Each project
            represents a unique challenge and learning opportunity, showcasing
            different technologies and problem-solving approaches. From web
            applications to creative experiments, these projects demonstrate my
            passion for building innovative solutions and continuously expanding
            my technical skills.
          </p>
          <p className="text-[1.2rem] text-justify font-semimedium">
            I believe in learning by doing, and each project has taught me
            valuable lessons about software development, user experience, and
            creative problem solving. Feel free to explore each project to see
            the technologies used and the solutions implemented.
          </p>
          <Link to="/project">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              FOR MORE PROJECTS!
            </button>
          </Link>
        </div>
        <div className="col-span-3 row-span-2 col-start-5 flex justify-center items-center relative h-full ">
          <div className="relative w-full h-[350px] flex justify-center items-center">
            <CardSwap
              cardDistance={60}
              width={400}
              height={300}
              verticalDistance={60}
              delay={3000}
              pauseOnHover={false}
            >
              <Card className="p-4 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-2">
                  Inventory System
                </h3>
                <div className="flex-1 w-full h-full">
                  <img
                    src="./src/assets/inventory.png"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
              <Card className="p-4 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-2">Timer App</h3>
                <div className="flex-1 w-full h-full">
                  <img
                    src="./src/assets/timer.png"
                    alt="Timer Project"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
              <Card className="p-4 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-2">
                  Portfolio Website
                </h3>
                <div className="flex-1 w-full h-full">
                  <img
                    src="./src/assets/portfolio.png"
                    alt="Portfolio Project"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
