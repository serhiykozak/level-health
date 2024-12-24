import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ 
  children,
  className = '',
  size = 'default',
  as: Component = 'div',
  fluid = false,
  centered = true,
}) => {
  const baseClasses = 'px-4';
  
  const sizeClasses = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'max-w-none'
  };

  const containerClasses = `
    ${baseClasses}
    ${!fluid ? sizeClasses[size] : ''}
    ${centered ? 'mx-auto' : ''}
    ${className}
  `;

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'default', 'lg', 'full']),
  as: PropTypes.elementType,
  fluid: PropTypes.bool,
  centered: PropTypes.bool,
};

export default Container; 