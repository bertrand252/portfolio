import React from "react";
import "./App.css";
import Lanyard from "./components/lanyard/lanyard";
// import { listTools, listProyek } from "./data";
import ShinyText from "./components/ShinyText/ShinyText";


function App() {
  return (
    <div
      className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
      id="about"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* Left content area */}
        <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
          <h1 className="text-3xl font-bold text-white">My 3D Lanyard</h1>
          <p className="text-gray-400 mt-2">
            This lanyard is rendered with React Three Fiber.
          </p>
        </div>

        {/* Right content area (the 3D Lanyard) */}
        <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </div>
  );
}

export default App;

