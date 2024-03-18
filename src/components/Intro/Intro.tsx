import Lottie from "lottie-react";
import IntroAnimation from "./intrOneClick.json";

function Intro(){
  return (
    <div className="h-screen w-screen absolute m-auto" id="intro">
      <Lottie animationData={IntroAnimation} loop={false} />
    </div> 
  );
}

export default Intro;
