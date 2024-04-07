import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";

function Home() {
  const [aboutVisible, setAboutVisible] = useState(false)
  const [serviceVisible, setServicesVisible] = useState(false)
  const [testimonialVisible, setTestimonialsVisible] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)
  const parallax = useRef<IParallax>(null)
  return (
    <Parallax pages={4} ref={parallax} enabled={false}>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }} onClick={() => {parallax.current?.scrollTo(1); setAboutVisible(true)}}>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1} sticky={{ start: 1, end: 4 }} onClick={() => {parallax.current?.scrollTo(2); setServicesVisible(true)}}>
        <About visibility={aboutVisible}/>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.1} sticky={{ start: 2, end: 4 }} onClick={() => {parallax.current?.scrollTo(3); setTestimonialsVisible(true)}}>
        <Services visibility={serviceVisible}/>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.1} sticky={{ start: 3, end: 4 }} onClick={() => {parallax.current?.scrollTo(4); setFooterVisible(true) }}>
        <Testimonials visibility={testimonialVisible}/>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.1} sticky={{ start: 4, end: 4 }} onClick={() => parallax.current?.scrollTo(4)}>
        <Footer visibility={footerVisible}/>
      </ParallaxLayer>

    </Parallax>
  );
}

export default Home;