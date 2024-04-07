import Navbar from '../../../Shared/Navbar'
import Button from '../../../Utils/Button'
import { useZoom } from '../../../Responsiveness/ZoomContext';
import { useEffect, useState } from 'react';

function Hero() { 
  const [show, setShow] = useState(false);
  const zoom = useZoom();

  useEffect(() => {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
   }, []);
    return (
    <div className="h-screen w-screen px-16 max:px-40 med:px-28 py-12">
          <div className={`w-[100%] h-[100%] flex flex-col justify-between items-center transition-opacity duration-500 ease-in ${show ? 'opacity-100' : 'opacity-0'}`}>
            <Navbar />
            
            <div className='flex flex-col gap-20 items-center'>
                <img src='/One.webp' alt='OneClick' className='-translate-x-8 max-w-[20vw] med:max-w-[15vw] med:max-h-[280px]'/>
                <div className='flex flex-col items-center gap-8 text-center max:w-[70%] w-[100%]'>
                    <h1 className={`text-white uppercase text-[2.5rem] font-bold ${zoom > 1 && "text-[2rem]"}`}>DIVE Into The Depths Of <span className='text-[#50D3AE] font-bold'>Digital</span> BUSINESS</h1>
                    <p className={`text-white opacity-75 leading-normal text-[1.5rem] font-normal ${zoom > 1 && "text-[1.15rem]"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                    <div>
                        <Button text='Get Started' textSize={zoom > 1 ? 1.5 : 2} paddingHorizontal={zoom > 1 ? 18 : 24} paddingVertical={zoom > 1 ? 6 : 10}/>
                    </div>
                </div>
            </div>

          </div>
    </div> 
  )
}

export default Hero