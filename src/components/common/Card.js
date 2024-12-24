import React from 'react';
import theme from '../../theme';

const Card = ({ 
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  icon: Icon,
  title,
  subtitle,
  footer,
  ...props 
}) => {
  // Define variant styles
  const variantStyles = {
    default: 'bg-white',
    primary: 'bg-blue-50',
    secondary: 'bg-gray-50',
    outline: 'bg-white border border-gray-200',
  };

  // Define hover effects
  const hoverStyles = hover ? `
    hover:shadow-lg
    hover:transform
    hover:scale-[1.02]
    hover:-translate-y-1
  ` : '';

  const baseStyles = `
    rounded-xl
    shadow-sm
    transition-all
    duration-300
    ${variantStyles[variant]}
    ${hoverStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const cardContent = (
    <>
      {/* Card Header */}
      {(Icon || title || subtitle) && (
        <div className="p-6 pb-4">
          <div className="flex items-start space-x-4">
            {Icon && (
              <div className="flex-shrink-0">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
            )}
            <div className="flex-1">
              {title && (
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-gray-600">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className={`${(Icon || title || subtitle) ? 'px-6 pb-6' : 'p-6'}`}>
        {children}
      </div>

      {/* Card Footer */}
      {footer && (
        <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-t">
          {footer}
        </div>
      )}
    </>
  );

  return onClick ? (
    <button
      onClick={onClick}
      className={`${baseStyles} text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      {...props}
    >
      {cardContent}
    </button>
  ) : (
    <div className={baseStyles} {...props}>
      {cardContent}
    </div>
  );
};

export default Card; 