import Navbar from '../../../Shared/Navbar'
import ScrollIndicator from '../../../Utils/ScrollIndicator'
import { useResponsive } from '../../../Responsiveness/ZoomContext';
import { useParallax, getParallaxStyle, getParallaxOpacity } from '../../../../hooks/useParallax';
import { useEffect, useState, RefObject } from 'react';
import { IParallax } from '@react-spring/parallax';

interface HeroProps {
  readonly parallaxRef?: RefObject<IParallax>;
  readonly currentSection?: number;
  readonly setCurrentSection?: (section: number) => void;
  readonly isScrolling?: boolean;
  readonly setIsScrolling?: (scrolling: boolean) => void;
}

interface ResponsiveClasses {
  container: string;
  logoWidth: number;
  title: string;
  description: string;
  spacing: string;
}

function Hero({ 
  parallaxRef, 
  currentSection = 0, 
  setCurrentSection, 
  isScrolling = false, 
  setIsScrolling 
}: HeroProps) { 
  const [show, setShow] = useState(false);
  const { isMobile, isTablet, scaleFactor } = useResponsive();
  const scrollY = useParallax();

  useEffect(() => {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
   }, []);

  const getResponsiveClasses = (): ResponsiveClasses => {
    if (isMobile) {
      return {
        container: "px-4 py-4",
        logoWidth: 200, 
        title: "text-xl", 
        description: "text-sm", 
        spacing: "gap-4" 
      };
    }
    
    if (isTablet) {
      return {
        container: "px-6 py-6",
        logoWidth: 250,
        title: "text-2xl",
        description: "text-base",
        spacing: "gap-6"
      };
    }
    
    if (scaleFactor < 0.5) {
      return {
        container: "px-3 py-4",
        logoWidth: 200,
        title: "text-lg",
        description: "text-sm",
        spacing: "gap-4"
      };
    }
    
    if (scaleFactor < 0.67) {
      return {
        container: "px-6 py-6",
        logoWidth: 220, 
        title: "text-2xl xl:text-3xl",
        description: "text-lg xl:text-xl",
        spacing: "gap-9 xl:gap-10"
      };
    }
    
    if (scaleFactor < 0.8) {
      return {
        container: "px-12 py-10",
        logoWidth: 240, 
        title: "text-2xl xl:text-3xl",
        description: "text-lg xl:text-xl",
        spacing: "gap-9 xl:gap-10"
      };
    }
    
    return {
      container: "px-16 xl:px-20 2xl:px-24 py-12 xl:py-16",
      logoWidth: 320, 
      title: "text-2xl xl:text-3xl 2xl:text-4xl",
      description: "text-lg xl:text-xl",
      spacing: "gap-10 xl:gap-12"
    };
  };

  const classes = getResponsiveClasses();
  
  const finalLogoWidth = Math.round(classes.logoWidth * scaleFactor);

  const scrollToNextSection = () => {
    if (isScrolling) return;
    
    if (parallaxRef?.current && setCurrentSection && setIsScrolling) {
      const targetSection = Math.min(currentSection + 1, 4);
      
      if (targetSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(targetSection);
        
        parallaxRef.current.scrollTo(targetSection);
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    } else {
      const nextSection = document.querySelector('#about-section') || 
                         document.querySelector('[data-section="about"]') ||
                         document.querySelector('main > div:nth-child(2)');
      
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className={`min-h-screen min-h-[100dvh] w-screen ${classes.container} transition-responsive relative overflow-hidden`}>
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 bg-[url('/WebsiteBackground.webp')] bg-cover bg-center bg-no-repeat"
        style={{
          ...getParallaxStyle(scrollY, 0.3),
          ...getParallaxOpacity(scrollY, 0, 400)
        }}
      />
      
      {/* Main content */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-between items-center transition-opacity duration-500 ease-in ${show ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        
        <div 
          className={`flex flex-col items-center ${classes.spacing} flex-1 justify-center ${isMobile ? 'py-4' : 'py-8'}`}
          style={getParallaxStyle(scrollY, 0.1)}
        >
          <img 
            src='/one.webp' 
            alt='OneClick' 
            style={{ 
              maxWidth: `${finalLogoWidth}px`,
              ...getParallaxStyle(scrollY, 0.2) 
            }}
            className={`${isMobile ? '' : '-translate-x-2 sm:-translate-x-4 lg:-translate-x-6'} img-responsive transition-responsive`}
          />
          <div className={`flex flex-col items-center ${isMobile ? 'gap-2' : 'gap-3 sm:gap-4 lg:gap-5'} text-center ${isMobile ? 'max-w-[90%]' : 'max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[75%]'}`}>
            <h1 className={`text-white uppercase font-bold ${classes.title} leading-tight ${isMobile ? 'px-2' : ''}`}>
              DIVE Into The Depths Of <span className='text-[#50D3AE] font-bold'>Digital</span> BUSINESS
            </h1>
            <p className={`text-white opacity-75 leading-relaxed font-normal ${classes.description} ${isMobile ? 'max-w-[95%] px-2' : 'max-w-[90%] lg:max-w-[85%]'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.
            </p>
            <div className={`${isMobile ? 'mt-4' : 'mt-6 sm:mt-8 lg:mt-10'}`}>
              <ScrollIndicator 
                onClick={scrollToNextSection}
                className={`transition-transform hover:scale-110 ${isScrolling ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              />
            </div>
          </div>
        </div>

        {/* Add some bottom spacing */}
        <div className={`${isMobile ? 'h-2' : 'h-4 sm:h-6 lg:h-8'}`}></div>
      </div>
    </div> 
  )
}

export default Hero