import { Link } from "react-router-dom";
import Threads from "./components/Threads/Threads";

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

      {/* Background Threads */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-10">
        <Threads
          color={[1, 1, 1]}
          amplitude={0.8}
          distance={0.3}
          enableMouseInteraction={false}
        />
      </div>

      <div className="py-20 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="order-1 lg:order-1">
              <img
                src="./src/assets/inventory.png"
                alt="Inventory Management System"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-2 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Inventory Management System
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A comprehensive inventory tracking system built with modern web
                technologies. This project features real-time inventory updates,
                user management, and detailed reporting capabilities. The system
                is designed to handle multiple warehouses and provides analytics
                for better business decision making.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  React
                </span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Node.js
                </span>
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MariaDB
                </span>
              </div>
              <div className="flex gap-4">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 z-50">
            <div className="order-1 lg:order-2">
              <img
                src="./src/assets/timer.png"
                alt="Productivity Timer"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Productivity Timer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A modern timer application designed to boost productivity with
                focus sessions and break reminders. Features customizable
                work/break intervals, progress tracking, and beautiful
                minimalist design. Built with TypeScript for reliability and
                React for smooth user interactions.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  TypeScript
                </span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  React
                </span>
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-4">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="order-1 lg:order-1">
              <img
                src="./src/assets/portfolio.png"
                alt="Portfolio Website"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-2 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Portfolio Website
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                This very website! A modern, responsive portfolio built with
                cutting-edge web technologies. Features smooth animations, 3D
                elements, and an engaging user experience. Showcases advanced
                CSS animations, React components, and modern design principles.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  React
                </span>
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Tailwind
                </span>
                <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  GSAP
                </span>
              </div>
              <div className="flex gap-4">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
