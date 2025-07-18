import { useState } from 'react';
import { useResponsive } from '../Responsiveness/ZoomContext';
import Button from '../Utils/Button';
import MobileMenu from './MobileMenu';

function Navbar() {
  const { isMobile, isTablet, scaleFactor } = useResponsive();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getButtonConfig = () => {
    if (isMobile) {
      return {
        textSize: 0.8,
        paddingHorizontal: 6,
        paddingVertical: 3
      };
    }
    
    if (isTablet) {
      return {
        textSize: 1.0,
        paddingHorizontal: 10,
        paddingVertical: 4
      };
    }
    
    if (scaleFactor < 0.8) {
      return {
        textSize: 1.1,
        paddingHorizontal: 10,
        paddingVertical: 4
      };
    }
    
    return {
      textSize: 1.2,
      paddingHorizontal: 12,
      paddingVertical: 5
    };
  };

  const getTextSizeClass = () => {
    if (isMobile) return 'text-responsive-sm';
    if (isTablet) return 'text-responsive-base';
    return 'text-responsive-lg';
  };

  const buttonConfig = getButtonConfig();
  const textSizeClass = getTextSizeClass();

  return (
    <>
      <div className={`w-full flex items-center justify-between ${isMobile ? 'h-10 px-2' : 'h-12 sm:h-14 lg:h-16'} transition-responsive`}>
        <img 
          src='/oneClickMaxLogo.webp' 
          alt='OneClick Logo' 
          className={`${isMobile ? 'h-8' : 'h-10 sm:h-12 lg:h-14 xl:h-16'} w-auto img-responsive transition-responsive ${
            scaleFactor < 0.8 && !isMobile ? 'h-8 sm:h-10' : ''
          }`}
        />
        
        {/* Desktop Navigation */}
        <ul className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-white transition-responsive ${textSizeClass}`}>
          <li className="hover:text-[#50D3AE] transition-colors cursor-pointer">Home</li>
          <li className="hover:text-[#50D3AE] transition-colors cursor-pointer">Our Work</li>
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden sm:block">
          <Button 
            text='Contact us' 
            textSize={buttonConfig.textSize}
            paddingHorizontal={buttonConfig.paddingHorizontal}
            paddingVertical={buttonConfig.paddingVertical}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isMobile ? 'p-1' : 'p-2'} text-white hover:text-[#50D3AE] transition-colors`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}

export default Navbar