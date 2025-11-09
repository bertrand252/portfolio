import { Link } from "react-router-dom";
import Threads from "./components/Threads/Threads";

function Achievement() {
  return (
    <div className="bg-stone-950 scroll-smooth">
      <div className="fixed top-3 sm:top-5 left-3 sm:left-5 z-50 pt-2 sm:pt-4">
        <Link
          to="/"
          className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white hover:bg-black transition-all duration-300 ease-out"
        >
          <div className="relative overflow-hidden px-3 py-2 sm:px-4 sm:py-3">
            <span className="relative z-[2] inline-block font-semibold text-black group-hover:text-white transition-colors duration-300 uppercase tracking-[0.2px] text-xs sm:text-sm">
              Home
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-0 rounded-full bg-black -translate-x-1/2 group-hover:w-[200px] group-hover:h-[200px] group-hover:-translate-y-1/2 transition-all duration-300 ease-out z-[1]" />
          </div>
        </Link>
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-10">
        <Threads
          color={[1, 1, 1]}
          amplitude={0.8}
          distance={0.3}
          enableMouseInteraction={false}
        />
      </div>

      <div className="py-10 md:py-20 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 sm:mb-6">
            My Achievements
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            A collection of milestones, recognitions, and accomplishments that
            reflect my dedication to academic excellence and community
            involvement.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="order-1 lg:order-1">
              <img
                src="./src/assets/beasiswa.jpg"
                alt="Scholarship Award"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-6 px-2 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Academic Scholarship Award
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Recipient of a prestigious academic scholarship recognizing
                outstanding academic performance and dedication to studies. This
                scholarship was awarded based on academic merit, leadership
                potential, and commitment to excellence in Computer Science
                education.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-yellow-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Academic Excellence
                </span>
                <span className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Merit-Based
                </span>
                <span className="bg-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Leadership
                </span>
              </div>
              <div className="flex gap-4">
                <div className="text-gray-300 text-xs sm:text-sm">
                  <span className="font-semibold">Achievement Date:</span> 2024
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="order-1 lg:order-2">
              <img
                src="./src/assets/TKUISA.jpg"
                alt="TKUISA Organization"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                TKUISA Leadership Role
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Active member and leader in TKUISA (Tamkang University
                Indonesian Student Association), contributing to community
                building and cultural exchange. Involved in organizing events,
                mentoring fellow students, and fostering connections between
                Indonesian and international students.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Leadership
                </span>
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Multimedia
                </span>
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Cultural Exchange
                </span>
              </div>
              <div className="flex gap-4">
                <div className="text-gray-300 text-sm">
                  <span className="font-semibold">Organization:</span> Tamkang
                  University Indonesian Student Association
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="order-1 lg:order-1">
              <img
                src="./src/assets/cyl.jpg"
                alt="Merit-Based Scholarship Achievement"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-2 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Merit-Based Scholarship
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Awarded a competitive merit-based scholarship recognizing
                outstanding academic achievement and potential for future
                success. This scholarship was granted based on comprehensive
                evaluation of academic performance, extracurricular involvement,
                and demonstrated leadership capabilities.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Academic Merit
                </span>
                <span className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Competitive Selection
                </span>
                <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Future Potential
                </span>
              </div>
              <div className="flex gap-4">
                <div className="text-gray-300 text-sm">
                  <span className="font-semibold">Type:</span> Merit-Based Award
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="order-1 lg:order-2">
              <img
                src="./src/assets/cyl2.jpg"
                alt="Excellence Scholarship Achievement"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Excellence Scholarship
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Recipient of an excellence scholarship awarded for exceptional
                academic performance and outstanding contributions to the
                university community. This prestigious scholarship recognizes
                students who demonstrate both academic brilliance and active
                involvement in campus life and community service.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Excellence
                </span>
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Academic Performance
                </span>
                <span className="bg-lime-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Community Contribution
                </span>
              </div>
              <div className="flex gap-4">
                <div className="text-gray-300 text-sm">
                  <span className="font-semibold">Category:</span> Excellence
                  Award
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20 p-8 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Growth & Excellence
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              These achievements represent my commitment to academic excellence,
              leadership development, and community engagement. Each milestone
              has contributed to my personal and professional growth, shaping me
              into a well-rounded individual ready to make meaningful
              contributions to society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
