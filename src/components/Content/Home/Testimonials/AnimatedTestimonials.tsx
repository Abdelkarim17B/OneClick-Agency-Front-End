import ClientsTestimonials from './ClientsTestimonials';
import { useZoom } from '../../../Responsiveness/ZoomContext';

function AnimatedTestimonials({ Current }: { readonly Current: number }) {
    const zoom = useZoom();

    const getQuoteTextSize = () => {
        if (zoom <= 0.67) return 'text-[2rem]';
        if (zoom <= 0.90) return 'text-[1.8rem]';
        if (zoom <= 1.00) return 'text-[1.8rem]';
        if (zoom <= 1.25) return 'text-[1.5rem]';
        if (zoom <= 1.33) return 'text-[1.3rem]';
        return 'text-[1.3rem]';
    };

    const quoteTextSize = getQuoteTextSize();

    const getContainerHeight = () => {
        if (zoom <= 0.67) return 'h-[75vh]';
        if (zoom <= 0.90) return 'h-[70vh]';
        if (zoom <= 1.00) return 'h-[65vh]'; 
        if (zoom <= 1.25) return 'h-[65vh]';
        if (zoom <= 1.33) return 'h-[65vh]';
        return 'h-[65vh]';
    };

 return (
    <div className={`flex gap-[2vw] items-end ${getContainerHeight()} relative transform transition-transform duration-300`}>
      {
        ClientsTestimonials.map(testimonial => (
            <img 
                key={testimonial.id}
                src={testimonial.imagePath} 
                alt={`Testimonial from ${testimonial.Name}`}
                className={`transition-all duration-500 delay-200 ease-in-out rounded-[4px] ${testimonial.id === Current ? 'animate-resizeToLarge' : 'animate-resizeToSmall'}`}
            />
        ))
      }

      {
        Current===0 && <div className={`h-[30vh] w-[53vw] absolute top-0 right-0 transition-all duration-500 delay-200 ease-in-out flex flex-col gap-8 ${Current===0 ? 'animate-fadein' : 'animate-fadeout'}`}>
            <div>
                <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[0].Name}</h2>
                <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[0].Job}</h4>
            </div>
            <div className='flex items-start gap-8'>
                <img src='./Quote.webp' alt="Quote" className='translate-y-2'/>
                <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[0].Text}</p>
            </div>
        </div>
      }
      {
        Current===1 && <div className={`h-[30vh] w-[42vw] absolute top-0 right-0 transition-all duration-500 delay-200 ease-in-out flex flex-col gap-8 ${Current===1  ? 'animate-fadein' : 'animate-fadeout'}`}>
            <div>
                <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[1].Name}</h2>
                <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[1].Job}</h4>
            </div>
            <div className='flex items-start gap-8'>
                <img src='./Quote.webp' alt="Quote" className='translate-y-2'/>
                <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[1].Text}</p>
            </div>
        </div>
      }
      {
        Current===2 && <div className={`h-[30vh] w-full absolute top-0 right-0 flex justify-between transition-all duration-500 delay-200 ease-in-out ${Current===2 ? 'animate-fadein' : 'animate-fadeout'}`}>
            <div className='h-full w-[20vw] flex flex-col gap-8'>
                <div>
                    <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[2].Name}</h2>
                    <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[2].Job}</h4>
                </div>
                <div className='flex items-start gap-8'>
                    <img src='./Quote.webp' alt="Quote" className='translate-y-2'/>
                    <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[2].Text.split('|')[0]}</p>
                </div>
            </div>
            <div className='h-full w-[31vw] flex flex-col gap-8'>
                <div className='opacity-0'>
                    <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[2].Name}</h2>
                    <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[2].Job}</h4>
                </div>
                <div className='flex items-start gap-8'>
                    <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[2].Text.split('|')[1]}</p>
                </div>
            </div>
        </div>
      }
      {
        Current===3 && <div className={`h-[30vh] w-full absolute top-0 right-0 flex justify-between transition-all duration-500 delay-200 ease-in-out ${Current===3  ? 'animate-fadein' : 'animate-fadeout'}`}>
            <div className='h-full w-[31vw] flex flex-col gap-8'>
                <div>
                    <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[3].Name}</h2>
                    <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[3].Job}</h4>
                </div>
                <div className='flex items-start gap-8'>
                    <img src='./Quote.webp' alt="Quote" className='translate-y-2'/>
                    <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[3].Text.split('|')[0]}</p>
                </div>
            </div>
            <div className='h-full w-[20vw] flex flex-col gap-8'>
                <div className='opacity-0'>
                    <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[3].Name}</h2>
                    <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[3].Job}</h4>
                </div>
                <div className='flex items-start gap-8'>
                    <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[3].Text.split('|')[1]}</p>
                </div>
            </div>
        </div>
      }
      {
        Current===4 && <div className={`h-[30vh] w-[42vw] absolute top-0 left-0 transition-all duration-500 delay-200 ease-in-out flex flex-col gap-8 ${Current===4 ? 'animate-fadein' : 'animate-fadeout'}`}>
            <div>
                <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[4].Name}</h2>
                <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[4].Job}</h4>
            </div>
            <div className='flex items-start gap-8'>
                <img src='./Quote.webp' alt="Quote" className='translate-y-2'/>
                <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[4].Text}</p>
            </div>
        </div>
      }
      {
        Current===5 && <div className={`h-[30vh] w-[53vw] absolute top-0 left-0 transition-all duration-500 delay-200 ease-in-out flex flex-col gap-8 ${Current===5 ? 'animate-fadein' : 'animate-fadeout'}`}>
            <div>
                <h2 className='uppercase text-white text-[1.5rem] font-bold'>{ClientsTestimonials[5].Name}</h2>
                <h4 className='uppercase text-[rgb(255,255,255,0.5)] text-[0.8rem] font-semibold'>{ClientsTestimonials[5].Job}</h4>
            </div>
            <div className='flex items-start gap-8'>
                <img src='./Quote.webp' alt="Quote" className='translate-y-2'/>
                <p className={`uppercase text-white ${quoteTextSize} font-bold`}>{ClientsTestimonials[5].Text}</p>
            </div>
        </div>
      }
    </div>
 );
}

export default AnimatedTestimonials;
