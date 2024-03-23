import Lottie from "lottie-react";
import IntroAnimation from "./intrOneClick.json";

function Intro(){
  return (
    <div className="h-screen w-screen absolute flex items-center justify-center" id="intro">
      <Lottie animationData={IntroAnimation} loop={false} />
    </div> 
  );
}

export default Intro;
