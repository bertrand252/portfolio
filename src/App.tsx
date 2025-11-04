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

      <div className="grid grid-cols-9 grid-rows-4 gap-0 -mt-48">
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

      <div className="grid grid-cols-9 grid-rows-4 gap-0 -mt-48">
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

      <div className="grid grid-cols-9 grid-rows-5 gap-0 -mt-48">
        <div className="col-span-3 row-span-2 col-start-3 flex justify-center items-center relative h-full ">
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
            </CardSwapRight>
          </div>
        </div>
        <div className="col-span-3 row-span-3 col-start-6 text-white flex flex-col space-y-4">
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
          <Link to="/achievement">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              FOR MORE PROJECTS!
            </button>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <section id="contact"></section>
        <ScrollFloat
          animationDuration={1}
          containerClassName="flex justify-center items-center h-96 -translate-y-32"
          textClassName="text-[5rem] text-center font-bold text-white font-sans"
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=20%"
          stagger={0.03}
        >
          CONTACT ME
        </ScrollFloat>
      </div>

      {/* Contact Content with Dark Background */}
      <div className="relative -mt-48 pt-12 pb-12 bg-gradient-to-br from-stone-900 via-stone-950 to-black">

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Lanyard */}
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Let's Connect!
                </h3>
                <p className="text-gray-300 text-base max-w-sm">
                  I'm always excited to discuss new opportunities, collaborate
                  on projects, or just have a chat about technology and
                  development.
                </p>
              </div>

              {/* Lanyard Component - Normal Size */}
              <div className="w-full max-w-sm">
                <Lanyard />
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.605-2.068 4.777-1.172 1.172-2.914 1.899-4.777 2.068C9.33 15.135 8.186 15 7.2 14.4c-.986-.6-1.8-1.414-2.4-2.4-.6-.986-.735-2.13-.605-3.523.169-1.858.896-3.605 2.068-4.777C7.435 2.528 9.177 1.801 11.04 1.632c1.393-.13 2.537.005 3.523.605.986.6 1.8 1.414 2.4 2.4.6.986.735 2.13.605 3.523z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.22.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.663-1.378l-.728 2.738c-.269 1.030-.992 2.304-1.262 3.649C8.69 23.761 10.31 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">
                Send me a message
              </h3>

              <form className="space-y-4">
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
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                      placeholder="John"
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
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                      placeholder="Doe"
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
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200"
                    placeholder="john@example.com"
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
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Send Message
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
