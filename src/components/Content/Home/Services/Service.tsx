import { useZoom } from '../../../Responsiveness/ZoomContext';

interface ServiceProps {
    readonly Title: string;
    readonly ImagePath: string;
    readonly className: string;
}

function Service({ Title, ImagePath, className }: ServiceProps) {
    const zoom = useZoom();
    
    const getBottomPosition = () => {
        if (zoom <= 0.67) return 'bottom-8';
        if (zoom <= 0.90) return 'bottom-6';
        if (zoom <= 1.00) return 'bottom-5';
        if (zoom <= 1.25) return 'bottom-4';
        if (zoom <= 1.33) return 'bottom-3';
        return 'bottom-2';
    };

    const getButtonClasses = () => {
        if (zoom <= 0.67) return 'text-[0.8rem]';
        if (zoom <= 0.90) return 'text-[0.7rem]';
        if (zoom <= 1.00) return 'text-[0.6rem]';
        if (zoom <= 1.25) return 'text-[0.5rem]';
        if (zoom <= 1.33) return 'text-[0.45rem]';
        return 'text-[0.7rem]';
    };

    const getMaxButtonClasses = () => {
        if (zoom <= 0.67) return 'max:text-[1rem]';
        if (zoom <= 0.90) return 'max:text-[0.9rem]';
        if (zoom <= 1.00) return 'max:text-[0.8rem]';
        if (zoom <= 1.25) return 'max:text-[0.7rem]';
        if (zoom <= 1.33) return 'max:text-[0.6rem]';
        return 'max:text-[0.8rem]';
    };

    const getMedButtonClasses = () => {
        if (zoom <= 0.67) return 'med:text-[0.7rem] ';
        if (zoom <= 0.90) return 'med:text-[0.6rem] ';
        if (zoom <= 1.00) return 'med:text-[0.55rem] ';
        if (zoom <= 1.25) return 'med:text-[0.45rem]';
        if (zoom <= 1.33) return 'med:text-[0.4rem] ';
        return 'med:text-[0.55rem]';
    };
    
    return (
        <div className={`w-full h-full relative group hover:cursor-pointer flex flex-col justify-center items-center ${className}`}>
            <img 
                src={ImagePath} 
                alt={Title} 
                className="w-full h-auto max-h-full object-contain med:filter grayscale group-hover:filter-none filter-none transition-all duration-500" 
            />
            <div className={`absolute inset-x-0 flex items-center justify-center med:opacity-0 group-hover:opacity-100 transition-opacity duration-300 opacity-100 ${getBottomPosition()} -translate-y-16`}>
                <button className={`border-2 text-nowrap border-white rounded-full backdrop-blur-[10px] px-6 py-3 text-white font-bold bg-[rgba(245,245,245,0.3)] capitalize transition-all duration-300 ${getButtonClasses()} ${getMaxButtonClasses()} ${getMedButtonClasses()}`}>
                    {Title}
                </button>
            </div>
        </div>
    );
}

export default Service;