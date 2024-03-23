import { useState, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import Home from "./components/Content/Home/Home";
import ZoomProvider from "./components/Responsiveness/ZoomContext";

function App() {

  const [showIntro, setShowIntro] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6700);
    return () => clearTimeout(timer);
  }, []); 

  

  return (
    <ZoomProvider>
      <div className="h-screen w-screen bg-[url('/WebsiteBackground.webp')] bg-cover bg-center bg-no-repeat">
      {showIntro ? (
        <Intro />
      ) : (
        <Home />
      )}
      </div>
    </ZoomProvider>
  );
}

export default App;
