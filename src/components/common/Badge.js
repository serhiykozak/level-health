import React from 'react';
import theme from '../../theme';

const Badge = ({ 
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = '',
  ...props 
}) => {
  // Define variant styles
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-indigo-100 text-indigo-800',
  };

  // Define size styles
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  const baseStyles = `
    inline-flex
    items-center
    font-medium
    rounded-full
    transition-colors
    duration-150
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <span className={baseStyles} {...props}>
      {Icon && (
        <Icon 
          className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} 
            ${children ? 'mr-1.5' : ''}`}
        />
      )}
      {children}
    </span>
  );
};

export default Badge; 