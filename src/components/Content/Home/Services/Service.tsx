interface ServiceProps {
    Title: string,
    ImagePath: string,
    className: string,
}

function Service({ Title, ImagePath, className }: ServiceProps) {
    return (
        <div className={`w-full relative group hover:cursor-pointer ${className}`}>
            <img src={ImagePath} alt={Title} className="w-full med:filter grayscale group-hover:filter-none filter-none transition-all duration-500" />
            <div className="absolute inset-x-0 bottom-8 flex items-center justify-center med:opacity-0 group-hover:opacity-100 transition-opacity duration-300 opacity-100">
                <button className="border-2 border-white rounded-full max:text-[1.2rem] text-[1rem] backdrop-blur-[10px] text-white font-bold bg-[rgba(245,245,245,0.3)] px-16 py-4 capitalize">{Title}</button>
            </div>
        </div>
    );
}

export default Service;