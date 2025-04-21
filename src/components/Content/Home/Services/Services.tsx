import { useEffect, useState } from 'react';
import { useZoom } from '../../../Responsiveness/ZoomContext';
import SectionLayout from '../../../Shared/SectionLayout';
import Service from './Service';

function Services({ visibility }: { visibility: boolean }) {
    const zoom = useZoom();
      const [show, setShow] = useState(false);
    

    useEffect(() => {
        const handleWheel = (evt: WheelEvent) => {
            evt.preventDefault();
            const scrollContainer = document.querySelector("main");
            if (scrollContainer) {
                scrollContainer.scrollLeft += evt.deltaY;
            }
        };

        const scrollContainer = document.querySelector("main");
        if (scrollContainer) {
            scrollContainer.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

    useEffect(() => {
        if (visibility) {
          const timer = setTimeout(() => {
            setShow(true);
          }, 1000);
          return () => clearTimeout(timer);
        }
     }, [visibility]);

    return (
        <SectionLayout PatternModel={2}>
            <div className="w-full h-full flex flex-col justify-between items-center">
                <h1 className={`text-white uppercase font-bold h-[10%] ${zoom > 1 ? "text-[2rem]" : "text-[2.5rem]"} ${show ? 'opacity-100' : 'opacity-0'}`}>Our <span className='text-[#50D3AE] font-bold'>Services</span></h1>
                <div className="w-screen overflow-x-hidden h-[90%] translate-y-12">
                    <main className='overflow-x-hidden flex top-0 h-[100%] services-container'>
                            <div className='max:min-w-[20vw] min-w-[50vw]  med:min-w-[30vw] h-[100%] flex justify-center items-center z-70 translate-x-64'>
                                <Service Title="web dev" ImagePath='/Services/WebDev.webp' className='top-[-5vh]'/>
                            </div>
                            <div className='max:min-w-[19vw] min-w-[47vw]  med:min-w-[28vw] h-[100%] flex justify-center items-center translate-x-48 z-40'>
                                <Service Title="Design" ImagePath='/Services/Design.webp' className='top-[7.5vh]'/>
                            </div>
                            <div className='max:min-w-[23vw] min-w-[57vw]  med:min-w-[30vw] h-[100%] flex justify-center items-center translate-x-36 z-50'>
                                <Service Title="Photography" ImagePath='/Services/Photography.webp' className='top-[-8vh]'/>
                            </div>
                            <div className='max:min-w-[21vw] min-w-[51vw]  med:min-w-[31vw] h-[100%] flex justify-center items-center translate-x-16 z-20'>
                                <Service Title="Video Editing" ImagePath='/Services/VideoEditing.webp' className=''/>
                            </div>
                            <div className='max:min-w-[22vw] min-w-[55vw] med:min-w-[33vw] h-[100%] flex justify-center items-center z-0'>
                                <Service Title="Motion Graphics" ImagePath='/Services/MotionGraphics.webp' className='top-[8.5vh]'/>
                            </div>
                            <div className='max:min-w-[21vw] min-w-[43vw] med:min-w-[27vw] h-[100%] flex justify-center items-center z-10 -translate-x-24'>
                                <Service Title="Voice Acting" ImagePath='/Services/VoiceActing.webp' className='top-[-10vh]'/>
                            </div>
                            <div className='max:min-w-[17vw] min-w-[42vw] med:min-w-[25vw] h-[100%] flex justify-center items-center z-30 -translate-x-48'>
                                <Service Title="Social Media" ImagePath='/Services/SocialMedia.webp' className=''/>
                            </div>
                            <div className='max:min-w-[22vw] min-w-[55vw] med:min-w-[33vw] h-[100%] flex justify-center items-center z-60 -translate-x-64'>
                                <Service Title="Digital Marketing" ImagePath='/Services/DigitalMarketing.webp' className=''/>
                            </div>
                    </main>
                </div>
            </div>
        </SectionLayout>
    );
}

export default Services;
