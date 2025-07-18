import { useEffect, useLayoutEffect, useState } from 'react';
import { useZoom } from '../../../Responsiveness/ZoomContext';
import SectionLayout from '../../../Shared/SectionLayout';
import AnimatedTestimonials from './AnimatedTestimonials';

function Testimonials({ visibility }: { visibility: boolean }){
    const [show, setShow] = useState(false);
    const zoom = useZoom();

    useEffect(() => {
        if (visibility) {
          const timer = setTimeout(() => {
            setShow(true);
          }, 1000);
          return () => clearTimeout(timer);
        }
     }, [visibility]);
    
     const [counter, setCounter] = useState(2);
     
     useLayoutEffect(() => {
        const interval = setInterval(() => {
          setCounter(prevCounter => (prevCounter + 1) % 6);
        }, 2000);
    
        return () => clearInterval(interval);
     }, []);
    
     return (
        <div className="min-h-screen min-h-[100dvh] w-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            
            <SectionLayout PatternModel={3}>
              <div className={`w-full h-full flex flex-col justify-between items-center transition-opacity duration-500 ease-in relative z-10 ${show ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className={`text-white uppercase font-bold h-[10%] -translate-y-16 ${zoom > 1 ? "text-[2rem]" : "text-[2.5rem]"}`}>Testimonials</h1>
                <AnimatedTestimonials Current={counter} />
              </div>
            </SectionLayout>
        </div>
     );
}
    
export default Testimonials;