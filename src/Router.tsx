import { Routes, Route } from "react-router-dom";
import App from "./App";
import Project from "./project";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default Router;
