import { useResponsive } from '../Responsiveness/ZoomContext';

interface ButtonProps {
  readonly text: string;
  readonly textSize: number;
  readonly paddingVertical: number;
  readonly paddingHorizontal: number;
  readonly onClick?: () => void;
  readonly variant?: 'primary' | 'secondary' | 'outline';
  readonly className?: string;
  readonly disabled?: boolean;
}

function Button({ 
  text, 
  textSize, 
  paddingVertical, 
  paddingHorizontal, 
  onClick,
  variant = 'outline',
  className = '',
  disabled = false
}: ButtonProps) {
  const { isMobile, scaleFactor } = useResponsive();

  const getAdjustedSizing = () => {
    if (scaleFactor < 0.5) {
      return {
        textSize: textSize * 0.7,
        paddingV: paddingVertical * 0.6,
        paddingH: paddingHorizontal * 0.6
      };
    }
    if (scaleFactor < 0.67) {
      return {
        textSize: textSize * 0.8,
        paddingV: paddingVertical * 0.75,
        paddingH: paddingHorizontal * 0.75
      };
    }
    if (scaleFactor < 0.8) {
      return {
        textSize: textSize * 0.9,
        paddingV: paddingVertical * 0.85,
        paddingH: paddingHorizontal * 0.85
      };
    }
    return {
      textSize: textSize,
      paddingV: paddingVertical,
      paddingH: paddingHorizontal
    };
  };

  const adjustedSizing = getAdjustedSizing();

  const getVariantClasses = () => {
    const baseClasses = "flex items-center justify-center border-2 rounded-full transition-all duration-300 ease-in-out font-medium";
    
    if (variant === 'primary') {
      return `${baseClasses} bg-[#50D3AE] border-[#50D3AE] text-white hover:bg-[#40C29E] hover:border-[#40C29E] active:bg-[#30B18E]`;
    }
    
    if (variant === 'secondary') {
      return `${baseClasses} bg-white border-white text-[#50D3AE] hover:bg-gray-100 hover:text-[#40C29E] active:bg-gray-200`;
    }
    
    return `${baseClasses} border-[#50D3AE] text-[#50D3AE] hover:bg-[#50d3ae35] hover:text-white active:bg-[#50d3ae50]`;
  };

  const getResponsiveClasses = () => {
    if (isMobile) {
      return "min-h-[40px] min-w-[120px] text-sm"; 
    }
    
    if (scaleFactor < 0.5) {
      return "min-h-[24px] min-w-[80px] text-xs";
    }
    
    if (scaleFactor < 0.67) {
      return "min-h-[28px] min-w-[90px] text-sm";
    }
    
    if (scaleFactor < 0.8) {
      return "min-h-[32px] min-w-[100px] text-sm";
    }
    
    return "min-h-[36px] min-w-[110px]";
  };

  return (
    <button 
      style={{ 
        paddingTop: `${adjustedSizing.paddingV/7}rem`, 
        paddingBottom: `${adjustedSizing.paddingV/7}rem`, 
        paddingLeft: `${adjustedSizing.paddingH/6}rem`, 
        paddingRight: `${adjustedSizing.paddingH/6}rem`,
        fontSize: `${adjustedSizing.textSize}rem`
      }}
      className={`${getVariantClasses()} ${getResponsiveClasses()} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={onClick}
      disabled={disabled}
      type="button"
      tabIndex={disabled ? -1 : 0}
    >
      {text}
    </button>
  );
}

export default Button;
