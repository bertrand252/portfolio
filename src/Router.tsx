import { Routes, Route } from "react-router-dom";
import App from "./App";
import Project from "./project";
import Achievement from "./achievement";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project" element={<Project />} />
      <Route path="/achievement" element={<Achievement />} />
    </Routes>
  );
}

export default Router;
