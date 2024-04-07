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
    
     const [counter, setCounter] = useState(0);
     
     useLayoutEffect(() => {
        const interval = setInterval(() => {
          setCounter(prevCounter => (prevCounter + 1) % 6);
        }, 10000);
    
        return () => clearInterval(interval);
     }, []);
    
     return (
        <SectionLayout PatternModel={3}>
          <div className={`w-full h-full flex flex-col justify-between items-center transition-opacity duration-500 ease-in ${show ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className={`text-white uppercase font-bold h-[10%] ${zoom > 1 ? "text-[2rem]" : "text-[2.5rem]"}`}>Testimonials</h1>
            <AnimatedTestimonials Current={counter} />
          </div>
        </SectionLayout>
     );
    };
    
    export default Testimonials;