import { useEffect, useState, useRef, useCallback } from 'react';
import { useZoom } from '../../../Responsiveness/ZoomContext';
import SectionLayout from '../../../Shared/SectionLayout';
import Service from './Service';

function Services({ visibility, onScrollToNext, onScrollToPrevious }: { 
    visibility: boolean;
    onScrollToNext?: () => void;
    onScrollToPrevious?: () => void;
}) {
    const zoom = useZoom();
    const [show, setShow] = useState(false);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    
    const services = [
        { title: "web dev", image: '/Services/WebDev.webp', className: 'top-[-2vh]' },
        { title: "Design", image: '/Services/Design.webp', className: 'top-[3vh]' },
        { title: "Photography", image: '/Services/Photography.webp', className: 'top-[-3vh]' },
        { title: "Video Editing", image: '/Services/VideoEditing.webp', className: '' },
        { title: "Motion Graphics", image: '/Services/MotionGraphics.webp', className: 'top-[4vh]' },
        { title: "Voice Acting", image: '/Services/VoiceActing.webp', className: 'top-[-4vh]' },
        { title: "Social Media", image: '/Services/SocialMedia.webp', className: '' },
        { title: "Digital Marketing", image: '/Services/DigitalMarketing.webp', className: '' }
    ];

    const scrollToService = useCallback((index: number) => {
        if (!scrollContainerRef.current) return;
        
        const container = scrollContainerRef.current;
        const avgServiceWidth = container.scrollWidth / services.length;
        const targetScrollLeft = index * avgServiceWidth;
        
        container.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
        });
        
        setCurrentServiceIndex(index);
    }, [services.length]);

    const updateBoundaryStates = (scrollLeft: number) => {
        if (!scrollContainerRef.current) return;
        
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        setIsAtStart(scrollLeft <= 10);
        setIsAtEnd(scrollLeft >= maxScrollLeft - 10);
    };

    const handleNext = useCallback(() => {
        if (currentServiceIndex < services.length - 1) {
            scrollToService(currentServiceIndex + 1);
        } else if (isAtEnd) {
            onScrollToNext?.();
        }
    }, [currentServiceIndex, services.length, isAtEnd, scrollToService, onScrollToNext]);

    const handlePrevious = useCallback(() => {
        if (currentServiceIndex > 0) {
            scrollToService(currentServiceIndex - 1);
        } else if (isAtStart) {
            onScrollToPrevious?.();
        }
    }, [currentServiceIndex, isAtStart, scrollToService, onScrollToPrevious]);

    useEffect(() => {
        const handleWheel = (evt: WheelEvent) => {
            evt.preventDefault();
            
            if (evt.deltaY > 0) {
                handleNext();
            } else if (evt.deltaY < 0) {
                handlePrevious();
            }
        };

        const container = scrollContainerRef.current;
        if (container && visibility) {
            container.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
    }, [visibility, currentServiceIndex, isAtStart, isAtEnd, handleNext, handlePrevious]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!visibility) return;
            
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                handlePrevious();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [visibility, currentServiceIndex, isAtStart, isAtEnd, handleNext, handlePrevious]);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;
            updateBoundaryStates(scrollContainerRef.current.scrollLeft);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
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
        <div className="h-screen h-[100dvh] w-screen relative overflow-hidden">            
            <SectionLayout PatternModel={2}>
                <div className="w-full h-full flex flex-col justify-between items-center relative z-10">
                    <h1 className={`text-white uppercase font-bold h-[10%] ${zoom > 1 ? "text-[2rem]" : "text-[2.5rem]"} ${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                        Our <span className='text-[#50D3AE] font-bold'>Services</span>
                    </h1>
                    
                    <div className={`w-screen relative ${
                        zoom <= 0.67 ? 'h-[75vh] translate-y-0' :
                        zoom <= 0.90 ? 'h-[68vh] translate-y-0' :
                        zoom <= 1.00 ? 'h-[65vh] translate-y-0' :
                        zoom <= 1.25 ? 'h-[60vh] translate-y-0' :
                        zoom <= 1.33 ? 'h-[55vh] translate-y-0' :
                        'h-[50vh] translate-y-0'
                    }`}>
                        <div 
                            ref={scrollContainerRef}
                            className='overflow-x-auto px-16 overflow-y-visible flex h-full services-container scroll-smooth'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {services.map((service, index) => {
                                const getResponsiveClasses = (baseIndex: number) => {
                                    const sizes = {
                                        67: { 
                                            0: 'w-[60.5vw] max:w-[19.8vw] med:w-[27.5vw] translate-x-16 translate-y-[-8vh]',
                                            1: 'w-[57.2vw] max:w-[18.7vw] med:w-[26.4vw] translate-x-12 translate-y-[6vh]',
                                            2: 'w-[59.4vw] max:w-[20.9vw] med:w-[28.6vw] translate-x-8 translate-y-[-4vh]',
                                            3: 'w-[55vw] max:w-[19.8vw] med:w-[27.5vw] translate-x-4 translate-y-[8vh]',
                                            4: 'w-[57.2vw] max:w-[19.8vw] med:w-[27.5vw] translate-y-[-2vh]',
                                            5: 'w-[52.8vw] max:w-[18.7vw] med:w-[25.3vw] -translate-x-4 translate-y-[5vh]',
                                            6: 'w-[55vw] max:w-[17.6vw] med:w-[24.2vw] -translate-x-8 translate-y-[-6vh]',
                                            7: 'w-[58.3vw] max:w-[19.8vw] med:w-[27.5vw] -translate-x-12 translate-y-[3vh]'
                                        },
                                        90: { 
                                            0: 'w-[55vw] max:w-[18.7vw] med:w-[25.3vw] translate-x-14 translate-y-[-7vh]',
                                            1: 'w-[52.8vw] max:w-[17.6vw] med:w-[24.2vw] translate-x-10 translate-y-[5vh]',
                                            2: 'w-[57.2vw] max:w-[19.8vw] med:w-[26.4vw] translate-x-6 translate-y-[-3vh]',
                                            3: 'w-[53.9vw] max:w-[18.7vw] med:w-[25.3vw] translate-x-3 translate-y-[7vh]',
                                            4: 'w-[55vw] max:w-[18.7vw] med:w-[25.3vw] translate-y-[-1vh]',
                                            5: 'w-[51.7vw] max:w-[17.6vw] med:w-[23.1vw] -translate-x-3 translate-y-[4vh]',
                                            6: 'w-[52.8vw] max:w-[16.5vw] med:w-[22vw] -translate-x-6 translate-y-[-5vh]',
                                            7: 'w-[55vw] max:w-[18.7vw] med:w-[25.3vw] -translate-x-10 translate-y-[2vh]'
                                        },
                                        100: { 
                                            0: 'w-[52.8vw] max:w-[17.6vw] med:w-[24.2vw] translate-x-12 translate-y-[-6vh]',
                                            1: 'w-[50.6vw] max:w-[16.5vw] med:w-[23.1vw] translate-x-9 translate-y-[4vh]',
                                            2: 'w-[55vw] max:w-[18.7vw] med:w-[25.3vw] translate-x-6 translate-y-[-2vh]',
                                            3: 'w-[51.7vw] max:w-[17.6vw] med:w-[24.2vw] translate-x-3 translate-y-[6vh]',
                                            4: 'w-[52.8vw] max:w-[17.6vw] med:w-[24.2vw] translate-y-0',
                                            5: 'w-[49.5vw] max:w-[16.5vw] med:w-[22vw] -translate-x-3 translate-y-[3vh]',
                                            6: 'w-[50.6vw] max:w-[15.4vw] med:w-[20.9vw] -translate-x-6 translate-y-[-4vh]',
                                            7: 'w-[52.8vw] max:w-[17.6vw] med:w-[24.2vw] -translate-x-9 translate-y-[1vh]'
                                        },
                                        125: { 
                                            0: 'w-[46.2vw] max:w-[16.5vw] med:w-[23.1vw] translate-x-10 translate-y-[-5vh]',
                                            1: 'w-[44vw] max:w-[15.4vw] med:w-[22vw] translate-x-8 translate-y-[3vh]',
                                            2: 'w-[48.4vw] max:w-[17.6vw] med:w-[24.2vw] translate-x-5 translate-y-[-1vh]',
                                            3: 'w-[45.1vw] max:w-[16.5vw] med:w-[23.1vw] translate-x-2 translate-y-[5vh]',
                                            4: 'w-[46.2vw] max:w-[16.5vw] med:w-[23.1vw] translate-y-0',
                                            5: 'w-[42.9vw] max:w-[15.4vw] med:w-[20.9vw] -translate-x-2 translate-y-[2vh]',
                                            6: 'w-[44vw] max:w-[14.3vw] med:w-[19.8vw] -translate-x-5 translate-y-[-3vh]',
                                            7: 'w-[46.2vw] max:w-[16.5vw] med:w-[23.1vw] -translate-x-8 translate-y-[1vh]'
                                        },
                                        133: { 
                                            0: 'w-[44vw] max:w-[15.4vw] med:w-[22vw] translate-x-8 translate-y-[-4vh]',
                                            1: 'w-[41.8vw] max:w-[14.3vw] med:w-[20.9vw] translate-x-6 translate-y-[2vh]',
                                            2: 'w-[46.2vw] max:w-[16.5vw] med:w-[23.1vw] translate-x-4 translate-y-0',
                                            3: 'w-[42.9vw] max:w-[15.4vw] med:w-[22vw] translate-x-2 translate-y-[4vh]',
                                            4: 'w-[44vw] max:w-[15.4vw] med:w-[22vw] translate-y-0',
                                            5: 'w-[40.7vw] max:w-[14.3vw] med:w-[19.8vw] -translate-x-2 translate-y-[1vh]',
                                            6: 'w-[41.8vw] max:w-[13.2vw] med:w-[18.7vw] -translate-x-4 translate-y-[-2vh]',
                                            7: 'w-[44vw] max:w-[15.4vw] med:w-[22vw] -translate-x-6 translate-y-[1vh]'
                                        },
                                        150: { 
                                            0: 'w-[40vw] max:w-[14vw] med:w-[19vw] translate-x-10 translate-y-[-7vh]',
                                            1: 'w-[38vw] max:w-[13vw] med:w-[18vw] translate-x-7 translate-y-[0vh]',
                                            2: 'w-[41vw] max:w-[15vw] med:w-[20vw] translate-x-5 translate-y-[-5vh]',
                                            3: 'w-[39vw] max:w-[14vw] med:w-[19vw] translate-x-2 translate-y-[2vh]',
                                            4: 'w-[40vw] max:w-[14vw] med:w-[19vw] translate-y-[-5vh]',
                                            5: 'w-[37vw] max:w-[13vw] med:w-[17vw] -translate-x-2 translate-y-8',
                                            6: 'w-[38vw] max:w-[12vw] med:w-[16vw] -translate-x-5 translate-y-[-6.5vh]',
                                            7: 'w-[40vw] max:w-[14vw] med:w-[19vw] -translate-x-7 translate-y-[-1vh]'
                                        }
                                    };

                                    if (zoom <= 0.67) return sizes[67][baseIndex as keyof typeof sizes[67]];
                                    if (zoom <= 0.90) return sizes[90][baseIndex as keyof typeof sizes[90]];
                                    if (zoom <= 1.00) return sizes[100][baseIndex as keyof typeof sizes[100]];
                                    if (zoom <= 1.25) return sizes[125][baseIndex as keyof typeof sizes[125]];
                                    if (zoom <= 1.33) return sizes[133][baseIndex as keyof typeof sizes[133]];
                                    return sizes[150][baseIndex as keyof typeof sizes[150]];
                                };

                                return (
                                    <div 
                                        key={service.title}
                                        className={`flex-shrink-0 h-full flex justify-center items-center transition-transform duration-300 ${getResponsiveClasses(index)} ${
                                            index === 0 ? 'z-70' :
                                            index === 1 ? 'z-40' :
                                            index === 2 ? 'z-50' :
                                            index === 3 ? 'z-20' :
                                            index === 4 ? 'z-0' :
                                            index === 5 ? 'z-10' :
                                            index === 6 ? 'z-30' :
                                            'z-60'
                                        }`}
                                    >
                                        <Service 
                                            Title={service.title} 
                                            ImagePath={service.image} 
                                            className={service.className}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        
                        <button
                            onClick={handlePrevious}
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 z-[100] ${
                                isAtStart ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110 shadow-lg'
                            }`}
                            disabled={isAtStart}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button
                            onClick={handleNext}
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 z-[100] ${
                                isAtEnd ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110 shadow-lg'
                            }`}
                            disabled={isAtEnd}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </SectionLayout>
        </div>
    );
}

export default Services;