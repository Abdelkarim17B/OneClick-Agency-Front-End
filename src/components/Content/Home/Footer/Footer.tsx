import { useEffect, useState } from 'react';
import { useZoom } from '../../../Responsiveness/ZoomContext';
import SectionLayout from '../../../Shared/SectionLayout';
import SocialMedia from './SocialMedia'

function Footer({ visibility }: { visibility: boolean }){
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

    return (
        <SectionLayout PatternModel={4}>
            <div className={`w-full h-full flex flex-col justify-between items-center transition-opacity duration-500 ease-in ${show ? 'opacity-100' : 'opacity-0'} ${zoom===1 ? 'py-16' : 'py-4'}`}>
                <h2 className={`uppercase text-white font-bold max-w-[60vw] text-center ${zoom===1 ? 'text-[4rem]' : 'text-[3rem]'}`}>
                    Are You ready to Grow your Business ?
                </h2>
                <h3 className={`uppercase text-[#3EB397] font-bold max-w-[60vw] text-center ${zoom===1 ? 'text-[3rem]' : 'text-[2.2rem]'}`}>
                    Let’s Keep in Touch
                </h3>
                <div className='flex flex-col gap-24'>
                    <div className='flex med:gap-24 gap-16'>
                        {SocialMedia.slice(0, 5).map(media => (
                            <img key={media.id} src={media.path} alt={`Social Media ${media.id}`} className={` med:w-16 w-12 ${zoom===1 ? 'max:w-auto' : 'w-16'}`}/>
                        ))}
                    </div>
                    <div className='flex med:gap-24 gap-16'>
                        {SocialMedia.slice(5, 10).map(media => (
                            <img key={media.id} src={media.path} alt={`Social Media ${media.id}`} className={`med:w-16 w-12 ${zoom===1 ? 'max:w-auto' : 'w-16'}`}/>
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}

export default Footer