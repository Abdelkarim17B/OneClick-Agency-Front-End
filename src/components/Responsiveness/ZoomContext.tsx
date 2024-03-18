import { createContext, useContext, useState, useEffect } from 'react';

const ZoomContext = createContext<number | undefined>(undefined);

export const useZoom = (): number => {
  const context = useContext(ZoomContext);
  if (!context) {
    throw new Error('useZoom must be used within a ZoomProvider');
  }
  return context;
};

function ZoomProvider({ children} :any){
  const [zoom, setZoom] = useState<number>(window.devicePixelRatio);
  useEffect(() => {
    const handleZoomChange = () => {
      setZoom(window.devicePixelRatio);
    };
    window.addEventListener('resize', handleZoomChange);
    return () => {
      window.removeEventListener('resize', handleZoomChange);
    };
  }, []);

  return <ZoomContext.Provider value={zoom}>{children}</ZoomContext.Provider>;
};

export default ZoomProvider;
