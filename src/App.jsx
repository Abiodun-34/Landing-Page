import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";
import Create from "./pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
