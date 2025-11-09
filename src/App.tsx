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
import CardSwapRight from "./components/CardSwap/CardSwapRight";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target as HTMLFormElement);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult("Error: Missing API key configuration");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Error sending message. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    }
  };

  return (
    <div className="bg-stone-950 scroll-smooth">
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pt-4">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#project" },
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

      <div className="flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-4 gap-6 lg:gap-0 -mt-24 sm:-mt-32 lg:-mt-48 px-4 sm:px-6 lg:px-0 min-h-screen lg:min-h-auto">
        <div className="order-1 lg:order-none lg:col-span-4 lg:row-span-3 lg:col-start-2 text-white flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
          <section id="about"></section>
          <TextType
            className="text-2xl sm:text-3xl lg:text-[3rem] font-bold text-white font-sans"
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
          <p className="text-sm sm:text-base lg:text-[1.2rem] text-center lg:text-justify font-semimedium">
            I'm a passionate Computer Science student at Tamkang University who
            enjoys solving problems and turning ideas into reality. My interests
            range from web development and database systems to creative
            pixel-styled designs. I love the process of learning new
            technologies, experimenting with design, and building projects that
            not only look good but also make life easier. Outside of coding, I
            enjoy photography, working out, and playing billiards activities
            that keep me balanced and inspired to create even more.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="CV.pdf" download="CV.pdf">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Download My Resume
              </button>
            </a>
          </div>
        </div>
        <div className="order-2 lg:order-none lg:col-span-3 lg:row-span-3 lg:col-start-7 text-white flex justify-center items-end lg:items-center">
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

      {/* Projects Section - Same Layout as About */}
      <div className="flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-4 gap-6 lg:gap-0 -mt-24 sm:-mt-32 lg:-mt-48 px-4 sm:px-6 lg:px-0 min-h-screen lg:min-h-auto">
        <div className="order-1 lg:order-none lg:col-span-4 lg:row-span-3 lg:col-start-2 text-white flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
          <p className="text-sm sm:text-base lg:text-[1.2rem] text-center lg:text-justify font-semimedium">
            Here are some of the projects I've been working on. Each project
            represents a unique challenge and learning opportunity, showcasing
            different technologies and problem-solving approaches. From web
            applications to creative experiments, these projects demonstrate my
            passion for building innovative solutions and continuously expanding
            my technical skills.
          </p>
          <p className="text-sm sm:text-base lg:text-[1.2rem] text-center lg:text-justify font-semimedium">
            I believe in learning by doing, and each project has taught me
            valuable lessons about software development, user experience, and
            creative problem solving. Feel free to explore each project to see
            the technologies used and the solutions implemented.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to="/project">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                FOR MORE PROJECTS!
              </button>
            </Link>
          </div>
        </div>
        <div className="order-2 lg:order-none lg:col-span-3 lg:row-span-3 lg:col-start-6 text-white flex justify-center items-center">
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

      <div>
        <section id="achievement"></section>
        <ScrollFloat
          animationDuration={1}
          containerClassName="flex justify-center items-center h-96 -translate-y-32"
          textClassName="text-[5rem] text-center font-bold text-white font-sans"
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=20%"
          stagger={0.03}
        >
          ACHIEVEMENT
        </ScrollFloat>
      </div>

      {/* Achievements Section - Same Layout as About */}
      <div className="flex flex-col lg:grid lg:grid-cols-9 lg:grid-rows-4 gap-6 lg:gap-0 -mt-24 sm:-mt-32 lg:-mt-48 px-4 sm:px-6 lg:px-0 min-h-screen lg:min-h-auto">
        <div className="order-2 lg:order-none lg:col-span-3 lg:row-span-3 lg:col-start-3 text-white flex justify-center items-center">
          <div className="relative w-full h-[350px] flex justify-center items-center">
            <CardSwapRight
              cardDistance={60}
              width={400}
              height={300}
              verticalDistance={60}
              delay={3000}
              pauseOnHover={false}
            >
              <Card className="p-4 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-2">
                  Scholarship
                </h3>
                <div className="flex-1 w-full h-full">
                  <img
                    src="./src/assets/beasiswa.jpg"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
              <Card className="p-4 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-2">
                  Organization
                </h3>
                <div className="flex-1 w-full h-full">
                  <img
                    src="./src/assets/TKUISA.jpg"
                    alt="Timer Project"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
              <Card className="p-4 flex flex-col overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-2">
                  Scholarship
                </h3>
                <div className="flex-1 w-full h-full">
                  <img
                    src="./src/assets/cyl2.jpg"
                    alt="Portfolio Project"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </Card>
            </CardSwapRight>
          </div>
        </div>
        <div className="order-1 lg:order-none lg:col-span-4 lg:row-span-3 lg:col-start-6 text-white flex flex-col justify-center space-y-4 sm:space-y-6 text-center lg:text-left">
          <p className="text-sm sm:text-base lg:text-[1.2rem] text-center lg:text-justify font-semimedium">
            Here are some of my key achievements and milestones throughout my
            academic and personal journey. Each accomplishment represents
            dedication, hard work, and continuous growth in both my studies and
            extracurricular activities. From scholarship awards to leadership
            roles, these achievements reflect my commitment to excellence and
            community involvement.
          </p>
          <p className="text-sm sm:text-base lg:text-[1.2rem] text-center lg:text-justify font-semimedium">
            I believe that achievements are not just about recognition, but
            about the journey of learning and contributing to something greater.
            These experiences have shaped my character and motivated me to
            continue striving for excellence in all aspects of my life.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to="/achievement">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                FOR MORE ACHIEVEMENTS!
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Extra spacing between Achievement and Contact */}
      <div className="h-32 sm:h-40 lg:h-48"></div>

      <div className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-stone-900 via-stone-950 to-black">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <section id="contact"></section>
            <h3 className="text-2xl font-bold text-white mb-3">
              Let's Connect!
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center space-y-6">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/bertrand.leonard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.26-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/BertrandLeonard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/bertrand252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">
                Send me a message
              </h3>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                      placeholder="Bertrand"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                      placeholder="Leonard"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                    placeholder="bertrand @example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                    placeholder="Let's work together!"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                {result && (
                  <div
                    className={`text-center p-3 rounded-lg ${
                      result.includes("successfully")
                        ? "bg-green-500/20 text-green-400"
                        : result.includes("Sending")
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {result}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={result === "Sending..."}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {result === "Sending..." ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
