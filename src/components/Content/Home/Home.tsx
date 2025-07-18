import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";

function Home() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [serviceVisible, setServicesVisible] = useState(false);
  const [testimonialVisible, setTestimonialsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const parallax = useRef<IParallax>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallax.current || isScrolling) return;
      
      const scrollTop = parallax.current.current;
      const containerHeight = parallax.current.space;
      const sectionHeight = containerHeight / 5; 

      if (scrollTop >= sectionHeight * 0.3) {
        setAboutVisible(true);
      }
      if (scrollTop >= sectionHeight * 1.3) {
        setServicesVisible(true);
      }
      if (scrollTop >= sectionHeight * 2.3) {
        setTestimonialsVisible(true);
      }
      if (scrollTop >= sectionHeight * 3.3) {
        setFooterVisible(true);
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        snapToNearestSection();
      }, 100); 
    };

    const parallaxElement = parallax.current?.container.current;
    if (parallaxElement) {
      parallaxElement.addEventListener('scroll', handleScroll);
      return () => {
        parallaxElement.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [isScrolling]); // snapToNearestSection is defined below, dependency removed

  const snapToNearestSection = () => {
    if (!parallax.current) return;
    
    const scrollTop = parallax.current.current;
    const containerHeight = parallax.current.space;
    const sectionHeight = containerHeight / 5;
    
    const currentSectionFloat = scrollTop / sectionHeight;
    const nearestSection = Math.round(currentSectionFloat);
    
    const targetScrollTop = nearestSection * sectionHeight;
    const threshold = 10;
    
    if (Math.abs(scrollTop - targetScrollTop) > threshold) {
      setIsScrolling(true);
      setCurrentSection(nearestSection);
      
      parallax.current.scrollTo(nearestSection);
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const scrollThreshold = 30; 
      
      if (Math.abs(delta) > scrollThreshold) {
        e.preventDefault();
        
        let targetSection = currentSection;
        
        if (delta > 0 && currentSection < 4) {
          targetSection = currentSection + 1;
        } else if (delta < 0 && currentSection > 0) {
          targetSection = currentSection - 1;
        }
        
        if (targetSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(targetSection);
          
          if (parallax.current) {
            parallax.current.scrollTo(targetSection);
          }
          
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    };

    const parallaxElement = parallax.current?.container.current;
    const bodyElement = document.body;
    const windowElement = window;
    
    if (parallaxElement) {
      parallaxElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    bodyElement.addEventListener('wheel', handleWheel, { passive: false });
    
    windowElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (parallaxElement) {
        parallaxElement.removeEventListener('wheel', handleWheel);
      }
      bodyElement.removeEventListener('wheel', handleWheel);
      windowElement.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, isScrolling]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      let targetSection = currentSection;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < 4) {
          targetSection = currentSection + 1;
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          targetSection = currentSection - 1;
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetSection = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetSection = 4;
      }
      
      if (targetSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(targetSection);
        
        if (parallax.current) {
          parallax.current.scrollTo(targetSection);
        }
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  return (
    <Parallax pages={5} ref={parallax} enabled={true}>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }}>
        <Hero 
          parallaxRef={parallax}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isScrolling={isScrolling}
          setIsScrolling={setIsScrolling}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1} sticky={{ start: 1, end: 4 }}>
        <About visibility={aboutVisible}/>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.1} sticky={{ start: 2, end: 4 }}>
        <Services 
          visibility={serviceVisible}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.1} sticky={{ start: 3, end: 4 }}>
        <Testimonials visibility={testimonialVisible}/>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.1} sticky={{ start: 4, end: 4 }}>
        <Footer visibility={footerVisible}/>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;