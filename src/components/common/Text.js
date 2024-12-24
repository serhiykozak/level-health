import React from 'react';
import theme from '../../theme';

const Text = ({ 
  children, 
  variant = 'body', 
  size = 'base',
  weight = 'normal',
  color = 'gray-800',
  className = '',
  as,
  ...props 
}) => {
  // Define variant mappings
  const variantElements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    span: 'span'
  };

  // Define variant styles
  const variantStyles = {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-medium',
    h6: 'text-base md:text-lg font-medium',
    body: 'text-base',
    span: 'text-base'
  };

  const Component = as || variantElements[variant] || 'p';
  const fontSize = theme.typography.fontSize[size];
  const fontWeight = theme.typography.fontWeight[weight];

  const textClasses = `
    ${variantStyles[variant]}
    text-${color}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <Component 
      className={textClasses}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text; 