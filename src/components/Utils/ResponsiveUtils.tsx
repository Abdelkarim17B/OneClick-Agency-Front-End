import { useResponsive } from '../Responsiveness/ZoomContext';

interface ResponsiveTextProps {
  readonly children: React.ReactNode;
  readonly mobileSize?: string;
  readonly tabletSize?: string;
  readonly desktopSize?: string;
  readonly className?: string;
}

export function ResponsiveText({ 
  children, 
  mobileSize = 'text-responsive-sm',
  tabletSize = 'text-responsive-base', 
  desktopSize = 'text-responsive-lg',
  className = ''
}: ResponsiveTextProps) {
  const { isMobile, isTablet } = useResponsive();
  
  const getTextSize = () => {
    if (isMobile) return mobileSize;
    if (isTablet) return tabletSize;
    return desktopSize;
  };

  return (
    <span className={`${getTextSize()} ${className}`}>
      {children}
    </span>
  );
}

interface ResponsiveContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly maxWidth?: string;
}

export function ResponsiveContainer({ 
  children, 
  className = '',
  maxWidth = 'max-w-7xl'
}: ResponsiveContainerProps) {
  return (
    <div className={`container-responsive ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}

interface ResponsiveSpacingProps {
  readonly children: React.ReactNode;
  readonly size?: 'sm' | 'md' | 'lg' | 'xl';
  readonly direction?: 'vertical' | 'horizontal' | 'both';
  readonly className?: string;
}

const getGapClass = (size: string, isMobile: boolean, isTablet: boolean): string => {
  if (size === 'sm') return isMobile ? 'gap-2' : isTablet ? 'gap-3' : 'gap-4';
  if (size === 'md') return isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8';
  if (size === 'lg') return isMobile ? 'gap-6' : isTablet ? 'gap-8' : 'gap-12';
  if (size === 'xl') return isMobile ? 'gap-8' : isTablet ? 'gap-12' : 'gap-16';
  return 'gap-4';
};

const getPaddingClass = (size: string, isMobile: boolean, isTablet: boolean): string => {
  if (size === 'sm') return isMobile ? 'p-2' : isTablet ? 'p-3' : 'p-4';
  if (size === 'md') return isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8';
  if (size === 'lg') return isMobile ? 'p-6' : isTablet ? 'p-8' : 'p-12';
  if (size === 'xl') return isMobile ? 'p-8' : isTablet ? 'p-12' : 'p-16';
  return 'p-4';
};

export function ResponsiveSpacing({ 
  children, 
  size = 'md',
  direction = 'both',
  className = ''
}: ResponsiveSpacingProps) {
  const { isMobile, isTablet } = useResponsive();
  
  const gapClass = getGapClass(size, isMobile, isTablet);
  const paddingClass = getPaddingClass(size, isMobile, isTablet);

  const getDirectionClass = () => {
    if (direction === 'vertical') return `flex flex-col ${gapClass}`;
    if (direction === 'horizontal') return `flex flex-row ${gapClass}`;
    return `${paddingClass} ${gapClass}`;
  };

  return (
    <div className={`${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
}

interface ResponsiveImageProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly mobileMaxWidth?: string;
  readonly tabletMaxWidth?: string;
  readonly desktopMaxWidth?: string;
}

export function ResponsiveImage({
  src,
  alt,
  className = '',
  mobileMaxWidth = 'max-w-[80vw]',
  tabletMaxWidth = 'max-w-[60vw]',
  desktopMaxWidth = 'max-w-[40vw]'
}: ResponsiveImageProps) {
  const { isMobile, isTablet } = useResponsive();
  
  const getMaxWidth = () => {
    if (isMobile) return mobileMaxWidth;
    if (isTablet) return tabletMaxWidth;
    return desktopMaxWidth;
  };

  return (
    <img 
      src={src}
      alt={alt}
      className={`img-responsive transition-responsive ${getMaxWidth()} ${className}`}
    />
  );
}

export default {
  ResponsiveText,
  ResponsiveContainer,
  ResponsiveSpacing,
  ResponsiveImage
};
