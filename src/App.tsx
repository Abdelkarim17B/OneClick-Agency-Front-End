import { useState, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import ResponsiveProvider from "./components/Responsiveness/ZoomContext";
import Home from "./components/Content/Home/Home";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ResponsiveProvider>
      <div className="min-h-screen min-h-[100dvh] w-screen transition-responsive bg-[url('/WebsiteBackground.webp')] bg-cover bg-center bg-no-repeat">
      {showIntro ? (
        <Intro />
      ) : (
        <Home />
      )}
      </div>
    </ResponsiveProvider>
  );
}

export default App;
