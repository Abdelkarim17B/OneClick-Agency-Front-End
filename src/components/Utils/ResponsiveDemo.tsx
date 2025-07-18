import { useResponsive } from '../Responsiveness/ZoomContext';
import { ResponsiveText, ResponsiveContainer, ResponsiveSpacing } from './ResponsiveUtils';

function ResponsiveDemo() {
  const { 
    isMobile, 
    isTablet, 
    isDesktop, 
    zoom, 
    scaleFactor, 
    screenWidth, 
    screenHeight,
    isLandscape 
  } = useResponsive();

  const getDeviceType = () => {
    if (isMobile) return 'Mobile';
    if (isTablet) return 'Tablet';
    return 'Desktop';
  };

  return (
    <ResponsiveContainer className="bg-white rounded-lg shadow-lg">
      <ResponsiveSpacing size="lg" direction="vertical">
        <div className="text-center">
          <ResponsiveText 
            mobileSize="text-responsive-2xl"
            tabletSize="text-responsive-3xl"
            desktopSize="text-responsive-4xl"
            className="font-bold text-gray-800"
          >
            Responsive System Demo
          </ResponsiveText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-responsive-lg font-semibold text-gray-700">Device Information</h3>
            <div className="space-y-2 text-responsive-sm">
              <p><strong>Device Type:</strong> {getDeviceType()}</p>
              <p><strong>Screen Size:</strong> {screenWidth}x{screenHeight}</p>
              <p><strong>Zoom Level:</strong> {zoom.toFixed(2)}x</p>
              <p><strong>Scale Factor:</strong> {scaleFactor.toFixed(2)}</p>
              <p><strong>Orientation:</strong> {isLandscape ? 'Landscape' : 'Portrait'}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-responsive-lg font-semibold text-gray-700">Responsive Features</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-md">
                <ResponsiveText className="text-blue-800">
                  This text automatically scales based on device size!
                </ResponsiveText>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-responsive-lg font-semibold text-gray-700 mb-4">Active Breakpoints</h3>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-sm ${isMobile ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              Mobile (&lt; 768px)
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${isTablet ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              Tablet (768px - 1024px)
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${isDesktop ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              Desktop (≥ 1024px)
            </span>
          </div>
        </div>
      </ResponsiveSpacing>
    </ResponsiveContainer>
  );
}

export default ResponsiveDemo;
