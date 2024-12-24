import React from 'react';
import theme from '../../theme';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = theme.commonStyles.button.base;
  const variantStyles = theme.commonStyles.button[variant];
  const sizeStyles = theme.commonStyles.button.sizes[size];

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles}
    ${sizeStyles}
    ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'}
    rounded-full
    inline-flex
    items-center
    justify-center
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg 
          className="animate-spin -ml-1 mr-3 h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-5 h-5 mr-2" />
      ) : null}
      
      <span>{children}</span>
      
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-5 h-5 ml-2" />
      )}
    </button>
  );
};

export default Button; 