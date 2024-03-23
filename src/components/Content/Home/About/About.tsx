import { useZoom } from '../../../Responsiveness/ZoomContext';
import SectionLayout from '../../../Shared/SectionLayout';

function About() { 
    const zoom  = useZoom();
    return (
    <SectionLayout PatternModel={1}>
        <div className="w-[100%] h-[100%] flex flex-col justify-between items-center">
             <h1 className={`text-white uppercase font-bold h-[20%] ${zoom > 1 ? "text-[2rem]" : "text-[2.5rem]"}`}>About <span className='text-[#50D3AE] font-bold'>OneClick</span></h1>
             <div className={`flex flex-col gap-4 w-[100%] h-[80%] text-center text-white items-center leading-loose font-medium ${zoom > 1 ? (zoom<1.25 ? "text-[1.25rem]" : "text-[1.1rem]") : "min-[1280px]:text-[1.2rem]  min-[1520px]:text-[1.4rem]  med:text-[1.2rem] text-[1.15rem]"}`}>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. Quisque tincidunt scelerisque libero. In dapibus augue non sapien. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora </p>
                <div className='flex max:flex-row flex-col items-center justify-between'>
                    <p className='max:text-left text-center max:pr-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. Quisque tincidunt scelerisque libero. In dapibus augue non sapien.</p>
                    <img src='/oneClickLogoMaxLarge.webp' alt='OneClick Logo' className='max-h-[15vh] max:w-64 max:block hidden' />
                    <img src='/oneClickLogoMaxLarge.webp' alt='OneClick Logo' className='w-[60%] max:hidden absolute opacity-20 z-0' />
                    <p className='max:text-right text-center max:pl-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. Quisque tincidunt scelerisque libero. In dapibus augue non sapien.</p>
                </div>
                <p className='max:text-center text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque tincidunt scelerisque libero. Suspendisse sagittis ultrices augue. Nulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean placerat. Quisque tincidunt scelerisque libero. In dapibus augue non sapien. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora </p>
             </div>
          </div>
    </SectionLayout>
  )
}

export default About