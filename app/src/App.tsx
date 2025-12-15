import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GolfTours from "./pages/GolfTours";
import Home from "./pages/Home";
import RugbyTours from "./pages/RugbyTours";

const App = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/golf-tours" element={<GolfTours />} />
        <Route path="/rugby-tours" element={<RugbyTours />} />
      </Route>
    </Routes>
  );
};

export default App;
