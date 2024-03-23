import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";

function Home() {
  const parallax = useRef<IParallax>(null)

  return (
    <Parallax pages={4} ref={parallax} enabled={false}>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }} onClick={() => parallax.current?.scrollTo(1)}>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1} sticky={{ start: 1, end: 4 }} onClick={() => parallax.current?.scrollTo(2)}>
        <About />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.1} sticky={{ start: 2, end: 4 }} onClick={() => parallax.current?.scrollTo(3)}>
        <div className="h-screen w-screen bg-red-400">
          <h1>this is section 3</h1>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.1} sticky={{ start: 3, end: 4 }} onClick={() => parallax.current?.scrollTo(4)}>
        <div className="h-screen w-screen bg-green-400">
          <h1>this is section 4</h1>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;