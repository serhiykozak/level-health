import React, { useEffect, useState } from 'react';
import theme from '../../theme';

const PageTransition = ({ children, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Enter animation
      setIsExiting(false);
      setTimeout(() => setIsVisible(true), 50);
    } else {
      // Exit animation
      setIsExiting(true);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isActive]);

  if (!isActive && !isVisible) return null;

  return (
    <div
      className={`transition-all duration-300 ${
        isVisible && !isExiting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
      style={{
        position: isActive ? 'relative' : 'absolute',
        width: '100%',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition; 