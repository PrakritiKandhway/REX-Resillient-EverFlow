import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Loading from "./components/Loading";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


const Home = ({ theme, setTheme }) => (
  <div className="fade-in">
    <HeroSection theme={theme} setTheme={setTheme} />
    <FeatureSection />
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