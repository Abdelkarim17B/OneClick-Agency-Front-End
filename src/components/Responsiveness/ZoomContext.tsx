import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ResponsiveContextType {
  zoom: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  isLandscape: boolean;
  scaleFactor: number;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

export const useResponsive = (): ResponsiveContextType => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};

export const useZoom = (): number => {
  const { zoom } = useResponsive();
  return zoom;
};

interface ResponsiveProviderProps {
  readonly children: ReactNode;
}

function ResponsiveProvider({ children }: ResponsiveProviderProps) {
  const [responsiveData, setResponsiveData] = useState<ResponsiveContextType>(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const zoom = window.devicePixelRatio || 1;
    
    return {
      zoom,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
      screenWidth: width,
      screenHeight: height,
      isLandscape: width > height,
      scaleFactor: Math.min(width / 1920, height / 1080, 1)
    };
  });

  useEffect(() => {
    const updateResponsiveData = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const zoom = window.devicePixelRatio || 1;
      
      setResponsiveData({
        zoom,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        screenWidth: width,
        screenHeight: height,
        isLandscape: width > height,
        scaleFactor: Math.min(width / 1920, height / 1080, 1)
      });
    };

    const handleResize = () => {
      updateResponsiveData();
    };

    const handleZoomChange = () => {
      setTimeout(updateResponsiveData, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleZoomChange);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleZoomChange);
      }
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={responsiveData}>
      {children}
    </ResponsiveContext.Provider>
  );
}

const ZoomProvider = ResponsiveProvider;

export default ZoomProvider;
