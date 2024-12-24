import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ 
  children,
  variant = 'body',
  as,
  className = '',
  color = 'default',
  align = 'left',
  weight = 'normal',
}) => {
  const variantClasses = {
    h1: 'text-5xl md:text-6xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    body: 'text-base',
    'body-large': 'text-lg',
    'body-small': 'text-sm',
    caption: 'text-xs',
  };

  const colorClasses = {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    primary: 'text-blue-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    white: 'text-white',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const Component = as || {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    'body-large': 'p',
    'body-small': 'p',
    caption: 'span',
  }[variant];

  return (
    <Component
      className={`
        ${variantClasses[variant]}
        ${colorClasses[color]}
        ${alignClasses[align]}
        ${weightClasses[weight]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'body', 'body-large', 'body-small', 'caption']),
  as: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'muted', 'primary', 'success', 'warning', 'danger', 'white']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  weight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
};

export default Text; 