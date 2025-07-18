import Lottie from "lottie-react";
import IntroAnimation from "./intrOneClick.json";

function Intro(){
  return (
    <div className={`min-h-screen min-h-[100dvh] w-screen transition-responsive relative overflow-hidden`}>
          {/* Parallax background layer */}
          <div 
            className="absolute inset-0 bg-[url('/WebsiteBackground.webp')] -translate-y-8 bg-cover bg-center bg-no-repeat"
          />
      <Lottie animationData={IntroAnimation} loop={false} />

    </div>

  );
}

export default Intro;
