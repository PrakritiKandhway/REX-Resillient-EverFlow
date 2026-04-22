import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Loading from "./components/Loading";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import WorkflowSection from "./components/WorkflowSection";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { Navigate } from "react-router-dom";




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
  const isLoggedIn = true;




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
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}/>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;