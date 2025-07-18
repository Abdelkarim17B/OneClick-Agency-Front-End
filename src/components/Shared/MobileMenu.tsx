import Button from '../Utils/Button';

interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <button
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm cursor-pointer w-full h-full"
        onClick={onClose}
        onKeyDown={handleBackdropKeyDown}
        aria-label="Close menu"
        type="button"
      />
      
      {/* Menu Content */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img 
              src='/oneClickMaxLogo.webp' 
              alt='OneClick Logo' 
              className="h-10 w-auto"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-6">
              <li>
                <button 
                  className="block text-lg font-medium text-gray-900 hover:text-[#50D3AE] transition-colors py-2 w-full text-left"
                  onClick={onClose}
                  type="button"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="block text-lg font-medium text-gray-900 hover:text-[#50D3AE] transition-colors py-2 w-full text-left"
                  onClick={onClose}
                  type="button"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  className="block text-lg font-medium text-gray-900 hover:text-[#50D3AE] transition-colors py-2 w-full text-left"
                  onClick={onClose}
                  type="button"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  className="block text-lg font-medium text-gray-900 hover:text-[#50D3AE] transition-colors py-2 w-full text-left"
                  onClick={onClose}
                  type="button"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className="block text-lg font-medium text-gray-900 hover:text-[#50D3AE] transition-colors py-2 w-full text-left"
                  onClick={onClose}
                  type="button"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="p-6 border-t border-gray-200">
            <Button 
              text="Contact us"
              textSize={1.2}
              paddingHorizontal={16}
              paddingVertical={12}
              variant="primary"
              className="w-full justify-center"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
