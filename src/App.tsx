import React from "react";
import Lanyard from "./components/Lanyard/lanyard";

function App() {
  return (
    <div>
      <Lanyard position={[50, 20, 60]} gravity={[0, -40, 0]} />
    </div>
  );
}
export default App;

