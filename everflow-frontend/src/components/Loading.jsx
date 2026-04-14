import { useEffect, useState } from "react";

const Loading = ({ onFinish }) => {
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", resize);

    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(onFinish, 600);
    }, 7000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src={isMobile ? "/Everflow_intro_Phone.mp4" : "/Everflow_intro_PC.mp4"}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Loading;