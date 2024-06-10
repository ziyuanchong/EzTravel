import { Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Planning from "./components/Planning";
import Itinerary from "./components/Itinerary";

function Application() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </>
  );
}

export default Application;
