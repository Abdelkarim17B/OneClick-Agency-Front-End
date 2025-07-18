import { useEffect, useState } from 'react';
import { useResponsive } from '../../../Responsiveness/ZoomContext';
import SectionLayout from '../../../Shared/SectionLayout';

interface ResponsiveClasses {
  container: string;
  title: string;
  description: string;
  spacing: string;
  logoSize: string;
}

function About({ visibility }: { readonly visibility: boolean }){
  const [show, setShow] = useState(false);
  const { isMobile, isTablet, scaleFactor } = useResponsive();

  useEffect(() => {
      if (visibility) {
        const timer = setTimeout(() => {
          setShow(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
   }, [visibility]);

  const getResponsiveClasses = (): ResponsiveClasses => {
    if (isMobile) {
      return {
        container: "px-4 py-4 gap-4",
        title: "text-xl",
        description: "text-sm leading-relaxed",
        spacing: "gap-3",
        logoSize: "w-[50%] max-h-[10vh]"
      };
    }
    
    if (isTablet) {
      return {
        container: "px-6 py-6 gap-6",
        title: "text-2xl",
        description: "text-base leading-relaxed",
        spacing: "gap-4",
        logoSize: "w-[45%] max-h-[12vh]"
      };
    }
    
    if (scaleFactor < 0.5) {
      return {
        container: "px-3 py-3 gap-3",
        title: "text-lg",
        description: "text-xs leading-relaxed",
        spacing: "gap-2",
        logoSize: "w-[40%] max-h-[8vh]"
      };
    }
    
    if (scaleFactor < 0.67) {
      return {
        container: "px-4 py-4 gap-4",
        title: "text-xl",
        description: "text-sm leading-relaxed",
        spacing: "gap-3",
        logoSize: "w-[45%] max-h-[10vh]"
      };
    }
    
    if (scaleFactor < 0.8) {
      return {
        container: "px-5 py-5 gap-5",
        title: "text-2xl",
        description: "text-base leading-relaxed",
        spacing: "gap-4",
        logoSize: "w-[50%] max-h-[12vh]"
      };
    }
    
    return {
      container: "px-6 py-6 gap-6",
      title: "text-3xl lg:text-4xl",
      description: "text-lg lg:text-xl leading-loose",
      spacing: "gap-6",
      logoSize: "w-64 max-h-[15vh]"
    };
  };

  const classes = getResponsiveClasses();

    return (
    <div className="min-h-screen min-h-[100dvh] w-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-black/10" />
      
      <SectionLayout PatternModel={1}>
        <div 
          id="about-section"
          className={`w-full h-full flex flex-col justify-between items-center transition-opacity duration-500 ease-in ${classes.container} ${show ? 'opacity-100' : 'opacity-0'} relative z-10`}
        >
             <h1 className={`text-white uppercase font-bold h-[20%] ${classes.title}`}>
                About <span className='text-[#50D3AE] font-bold'>OneClick</span>
             </h1>
             <div className={`flex flex-col w-full h-[80%] text-center text-white items-center font-medium ${classes.description} ${classes.spacing}`}>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. 
                    Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. 
                    Quisque tincidunt scelerisque libero. In dapibus augue non sapien. Neque porro quisquam est, qui dolorem 
                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                </p>
                <div className={`flex ${isMobile ? 'flex-col' : 'max:flex-row flex-col'} items-center justify-between ${classes.spacing}`}>
                    <p className={`${isMobile ? 'text-center' : 'max:text-left text-center max:pr-8'}`}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. 
                        Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. 
                        Quisque tincidunt scelerisque libero. In dapibus augue non sapien.
                    </p>
                    {!isMobile && (
                        <>
                            <img src='/oneClickLogoMaxLarge.webp' alt='OneClick Logo' className={`${classes.logoSize} max:block hidden`} />
                            <img src='/oneClickLogoMaxLarge.webp' alt='OneClick Logo' className='w-[60%] max:hidden absolute opacity-20 z-0' />
                        </>
                    )}
                    {isMobile && (
                        <img src='/oneClickLogoMaxLarge.webp' alt='OneClick Logo' className={`${classes.logoSize} opacity-80`} />
                    )}
                    <p className={`${isMobile ? 'text-center' : 'max:text-right text-center max:pl-8'}`}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. 
                        Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. 
                        Quisque tincidunt scelerisque libero. In dapibus augue non sapien.
                    </p>
                </div>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. 
                    Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. 
                    Quisque tincidunt scelerisque libero. In dapibus augue non sapien. Neque porro quisquam est, qui dolorem 
                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                </p>          </div>
        </div>
      </SectionLayout>
    </div>
  )
}

export default About