import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will scroll to top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to ensure DOM is updated before scrolling
    const timeoutId = setTimeout(() => {
      // Try-catch to handle any potential scrolling errors
      try {
        // First approach - using scrollTo with options
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto' // Using 'auto' instead of 'smooth' for better mobile compatibility
        });
        
        // Fallback for older browsers or mobile devices
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
      } catch (error) {
        // Simple fallback if the above fails
        window.scrollTo(0, 0);
      }
    }, 10);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 