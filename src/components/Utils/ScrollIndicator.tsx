import { useResponsive } from '../Responsiveness/ZoomContext';

interface ScrollIndicatorProps {
  readonly onClick?: () => void;
  readonly className?: string;
}

function ScrollIndicator({ onClick, className = '' }: ScrollIndicatorProps) {
  const { isMobile, scaleFactor } = useResponsive();

  const getSize = () => {
    if (isMobile) return 'w-6 h-10';
    if (scaleFactor < 0.5) return 'w-5 h-8';
    if (scaleFactor < 0.67) return 'w-6 h-9';
    return 'w-7 h-11';
  };

  const getWheelSize = () => {
    if (isMobile) return 'w-1 h-2';
    if (scaleFactor < 0.5) return 'w-0.5 h-1.5';
    return 'w-1 h-2.5';
  };

  return (
    <button 
      className={`flex flex-col items-center cursor-pointer bg-transparent border-none ${className}`}
      onClick={onClick}
      type="button"
      aria-label="Scroll to next section"
    >
      {/* Scroll text */}
      <span className={`text-white opacity-75 mb-3 ${isMobile ? 'text-xs' : 'text-sm'} tracking-wider uppercase`}>
        Scroll Down
      </span>
      
      {/* Mouse indicator */}
      <div className={`relative ${getSize()} border-2 border-white border-opacity-60 rounded-full bg-transparent`}>
        {/* Mouse wheel */}
        <div 
          className={`absolute top-2 left-1/2 transform -translate-x-1/2 ${getWheelSize()} bg-white rounded-full opacity-60 animate-bounce`}
          style={{
            animationDuration: '1.5s',
            animationIterationCount: 'infinite'
          }}
        />
      </div>
      
      {/* Arrow down */}
      <div className="mt-3 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
        <svg 
          className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-white opacity-60`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </button>
  );
}

export default ScrollIndicator;
