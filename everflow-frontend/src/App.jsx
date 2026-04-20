import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import WorkflowSection from "./components/WorkflowSection";
import Footer from "./components/Footer";



const Home = ({ theme, setTheme }) => (
  <div className="fade-in">
    <HeroSection theme={theme} setTheme={setTheme} />
    <WorkflowSection />
    <FeatureSection />
    <Footer />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;