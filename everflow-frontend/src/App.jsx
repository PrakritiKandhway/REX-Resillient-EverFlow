import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <>
          <div className="fade-in">
            <HeroSection theme={theme} setTheme={setTheme} />
            <FeatureSection />
          </div>
        </>
      )}
    </>
  );
}

export default App;