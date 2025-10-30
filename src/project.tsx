import Lanyard from "./components/Lanyard/lanyard";
import BlurText from "./components/BlurText/BlurText";
import { Link } from "react-router-dom";
import logo from "./assets/pillNav/logoW.svg";
import Threads from "./components/Threads/Threads";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import CardSwap, { Card } from "./components/CardSwap/CardSwap";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import techLogos from "./components/LogoLoop/LogoList";

function Project() {
  return (
    <div className="bg-stone-950 scroll-smooth">
      <div className="fixed top-5 left-5 z-50 pt-4">
        <Link
          to="/"
          className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white hover:bg-black transition-all duration-300 ease-out"
        >
          <div className="relative overflow-hidden px-4 py-3">
            <span className="relative z-[2] inline-block font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase tracking-[0.2px] text-sm">
              Home
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0 rounded-full bg-black -translate-x-1/2 group-hover:w-[200px] group-hover:h-[200px] group-hover:-translate-y-1/2 transition-all duration-300 ease-out z-[1]" />
          </div>
        </Link>
      </div>

      {/* All Projects Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <img
                src="./src/assets/inventory.png"
                alt="Inventory System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Inventory Management System
                </h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive inventory tracking system built with React and
                  Node.js.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                    Live Demo
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <img
                src="./src/assets/timer.png"
                alt="Timer App"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Productivity Timer
                </h3>
                <p className="text-gray-400 mb-4">
                  A modern timer application with focus sessions and break
                  reminders.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                    Tailwind
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
                    Live Demo
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300">
              <img
                src="./src/assets/portfolio.png"
                alt="Portfolio Website"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Portfolio Website
                </h3>
                <p className="text-gray-400 mb-4">
                  This very website! Built with modern React and stunning
                  animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-pink-600 text-white px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">
                    GSAP
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                    Live Demo
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
