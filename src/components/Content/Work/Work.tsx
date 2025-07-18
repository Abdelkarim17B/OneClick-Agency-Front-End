import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./Projects";
import { useRef, useState } from "react";

export default function Work() {
  const parallax = useRef<IParallax>(null);
  const [absolutePosition, setAbsolutePosition] = useState<boolean>(false);

  const handleParallaxLayerClick = () => {
    if (!absolutePosition) {
      setAbsolutePosition(true);
      parallax.current?.scrollTo(2);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center">
      <Parallax pages={2} ref={parallax} enabled={false}>
        <ParallaxLayer offset={0} speed={0.1} sticky={{ start: 0, end: 4 }} onClick={handleParallaxLayerClick}>
          <div className="text-center flex flex-col gap-7 relative h-screen w-screen justify-center pb-60  ">
            <h2 className="text-4xl w-[40%] mx-auto text-white font-bold uppercase">DIVE Into The Depths Of <span className="text-[#50D3AE] font-bold">Digital</span> BUSINESS</h2>
            <p className="text-white text-lg opacity-70 w-[40%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1} sticky={{ start: 1, end: 20 }} >
          <div className={`absolute ${absolutePosition ? 'bottom-0' : 'bottom-[40%]'}`}>
            <Projects />
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
