import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App";

const Project = lazy(() => import("./project"));
const Achievement = lazy(() => import("./achievement"));

function Router() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
