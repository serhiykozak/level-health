import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  shadow = true,
  padding = true,
  onClick
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  const hoverClasses = hover ? 'transform hover:scale-105 hover:shadow-xl' : '';
  const shadowClasses = shadow ? 'shadow-lg' : '';
  const paddingClasses = padding ? 'p-8' : '';
  
  const variantClasses = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-blue-50 to-white',
    transparent: 'bg-transparent',
    blue: 'bg-blue-50',
  };

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${shadowClasses} ${paddingClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'gradient', 'transparent', 'blue']),
  hover: PropTypes.bool,
  shadow: PropTypes.bool,
  padding: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card; 