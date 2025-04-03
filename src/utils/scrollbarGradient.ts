/**
 * Dynamically updates the scrollbar gradient based on the scroll position
 * The gradient transitions smoothly from blue to purple as the user scrolls down
 */

// Define the start and end gradient states
const gradientStates = {
  top: {
    // Medium blue gradient at the top of the page (darker than before)
    from: '#54d5ff', // primary-300 (medium blue)
    to: '#1ebcff',   // primary-400 (moderate blue)
  },
  bottom: {
    // Dark purple gradient at the bottom of the page
    from: '#7c03ae', // accent-700 (dark purple)
    to: '#390152',   // accent-900 (very dark purple)
  }
};

/**
 * Debounce function to limit how often a function is called
 */
const debounce = (func: Function, wait: number): (() => void) => {
  let timeout: number | null = null;
  
  return function executedFunction() {
    const later = () => {
      timeout = null;
      func();
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(later, wait);
  };
};

/**
 * Initialize the scrollbar gradient animation
 */
export const initScrollbarGradient = (): void => {
  // Create a style element for the dynamic scrollbar styles
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);

  // Add base scrollbar styling that won't change
  const baseStyleElement = document.createElement('style');
  baseStyleElement.textContent = `
    /* Reserve space for scrollbar to prevent layout shifts (modern browsers) */
    html {
      scrollbar-gutter: stable;
    }
    
    /* Basic scrollbar styling */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  `;
  document.head.appendChild(baseStyleElement);

  // Track if user is actively scrolling
  let isScrolling = false;
  let scrollTimeout: number | null = null;

  // Function to interpolate between two colors
  const interpolateColor = (color1: string, color2: string, factor: number): string => {
    // Convert hex to RGB
    const hex1 = color1.replace('#', '');
    const hex2 = color2.replace('#', '');
    
    // Parse RGB values
    const r1 = parseInt(hex1.substring(0, 2), 16);
    const g1 = parseInt(hex1.substring(2, 4), 16);
    const b1 = parseInt(hex1.substring(4, 6), 16);
    
    const r2 = parseInt(hex2.substring(0, 2), 16);
    const g2 = parseInt(hex2.substring(2, 4), 16);
    const b2 = parseInt(hex2.substring(4, 6), 16);
    
    // Interpolate
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    
    // Convert back to hex (ensuring 2 digits with padStart)
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Apply a cubic easing function to make the transition feel more natural
  const easeInOutCubic = (x: number): number => {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  };

  // Set scrollbar visibility
  const setScrollbarVisibility = (visible: boolean): void => {
    isScrolling = visible;
    updateScrollbarGradient();
  };
  
  // Update gradient on scroll
  const updateScrollbarGradient = (): void => {
    // Calculate scroll percentage
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
    
    // Apply easing for smoother transitions between colors
    const easedPercentage = easeInOutCubic(scrollPercentage);
    
    // Interpolate between the top and bottom gradient colors
    const fromColor = interpolateColor(
      gradientStates.top.from, 
      gradientStates.bottom.from, 
      easedPercentage
    );
    
    const toColor = interpolateColor(
      gradientStates.top.to, 
      gradientStates.bottom.to, 
      easedPercentage
    );
    
    // Create gradient strings - use to-right for a horizontal gradient like the button
    const thumbGradient = `linear-gradient(to right, ${fromColor}, ${toColor})`;
    
    // For hover, shift more toward the darker end
    const hoverFactor = Math.min(easedPercentage + 0.15, 1.0);
    const hoverFromColor = interpolateColor(
      gradientStates.top.from, 
      gradientStates.bottom.from, 
      hoverFactor
    );
    
    const hoverToColor = interpolateColor(
      gradientStates.top.to, 
      gradientStates.bottom.to, 
      hoverFactor
    );
    
    const hoverGradient = `linear-gradient(to right, ${hoverFromColor}, ${hoverToColor})`;
    
    // Set the dynamic styles with opacity-based visibility
    styleElement.textContent = `
      /* Scrollbar thumb with opacity-based visibility */
      ::-webkit-scrollbar-thumb {
        background: ${thumbGradient};
        border: 2px solid transparent;
        background-clip: content-box;
        border-radius: 9999px;
        opacity: ${isScrolling ? 1 : 0};
        transition: opacity ${isScrolling ? '0.5s ease-out' : '1.2s ease-in'};
      }
      
      /* Hover effect */
      ::-webkit-scrollbar-thumb:hover {
        background: ${hoverGradient};
        opacity: 1;
        transition: opacity 0.4s ease-out, background 0.4s ease;
      }
      
      /* Firefox styling */
      html {
        scrollbar-color: ${isScrolling ? `${fromColor} transparent` : 'transparent transparent'};
        transition: scrollbar-color ${isScrolling ? '0.5s ease-out' : '1.2s ease-in'};
      }
      
      /* Show scrollbar on hover near right edge */
      .hover-scrollbar::-webkit-scrollbar-thumb {
        opacity: 0.7;
        transition: opacity 0.8s ease-out;
      }
    `;
    
    // Update Firefox scrollbar
    document.documentElement.style.setProperty('--scrollbar-color', fromColor);
    document.documentElement.style.setProperty('--scrollbar-hover-color', hoverFromColor);
    
    // Add or remove hover class based on mouse position
    document.body.classList.toggle('hover-scrollbar', !isScrolling && mouseNearRightEdge);
  };

  // Track if mouse is near right edge
  let mouseNearRightEdge = false;

  // Handle scroll events
  const handleScroll = (): void => {
    // Show scrollbar
    setScrollbarVisibility(true);
    
    // Clear previous timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Hide scrollbar after 2 seconds of inactivity (increased from 1.5s)
    scrollTimeout = window.setTimeout(() => {
      setScrollbarVisibility(false);
    }, 2000);
  };

  // Debounce the scroll handler to improve performance
  const debouncedUpdateGradient = debounce(updateScrollbarGradient, 10);

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Mouse move event to detect if near right edge
  window.addEventListener('mousemove', (event) => {
    // Show scrollbar when mouse moves near the right edge
    const mouseX = event?.clientX || 0;
    const viewportWidth = window.innerWidth;
    
    // Update right edge detection
    mouseNearRightEdge = mouseX > viewportWidth - 50;
    
    if (mouseNearRightEdge) {
      setScrollbarVisibility(true);
    }
  }, { passive: true });
  
  // Initialize on load with scrollbar hidden
  setScrollbarVisibility(false);
  
  // Update on resize as well
  window.addEventListener('resize', debouncedUpdateGradient, { passive: true });
};

export default initScrollbarGradient; 