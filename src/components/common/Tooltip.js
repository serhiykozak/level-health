import React, { useState, useRef, useEffect } from 'react';
import theme from '../../theme';

const Tooltip = ({ 
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const tooltipRef = useRef(null);

  // Position styles
  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  // Arrow styles
  const arrowStyles = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-gray-900',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-gray-900',
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={tooltipRef}
      {...props}
    >
      {children}
      {isVisible && (
        <div className={`
          absolute
          z-${theme.zIndex.tooltip}
          px-2
          py-1
          text-sm
          text-white
          bg-gray-900
          rounded
          whitespace-nowrap
          pointer-events-none
          transition-opacity
          duration-200
          ${positionStyles[position]}
          ${className}
        `}>
          {content}
          <div className={`
            absolute
            w-2
            h-2
            bg-gray-900
            transform
            rotate-45
            ${arrowStyles[position]}
          `} />
        </div>
      )}
    </div>
  );
};

export default Tooltip; 